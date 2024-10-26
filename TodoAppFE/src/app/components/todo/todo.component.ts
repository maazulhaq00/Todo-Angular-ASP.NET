import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { ITodo } from '../../interfaces/ITodo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  formBuilder = inject(FormBuilder)
  httpService = inject(HttpService)

  tasksList: ITodo[] = []
  isEdit: boolean = false;
  tid: number = 0
  tstatus: number = 0

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.httpService.getTodoes().subscribe((result) => {
      this.tasksList = result

      console.log(this.tasksList);
    })
  }

  TaskForm = this.formBuilder.group({
    tname: ['', [Validators.required]]
  })

  handleTaskSubmit() {
    let todoObject: ITodo = {
      tid: this.isEdit ? this.tid : 0,
      tname: this.TaskForm.value.tname!,
      tstatus: this.isEdit ? this.tstatus : 0
    }
    if (this.isEdit) {
      this.httpService.updateTodoes(this.tid, todoObject).subscribe((result) => {
        console.log(result);
        this.TaskForm.patchValue({ tname: "" });
        this.getAllTasks()
        this.isEdit = false;
      })
    }
    else {
      this.httpService.createTodoes(todoObject).subscribe((result) => {
        console.log(result);
        this.TaskForm.patchValue({ tname: "" });
        this.getAllTasks()
      })
    }

  }

  editTask(tid: number) {
    this.isEdit = true
    this.tid = tid

    this.httpService.getTodoesById(tid).subscribe((result) => {
      this.tstatus = result.tstatus
      this.TaskForm.patchValue({ tname: result.tname });
    })
  }
  
  deleteTask(tid: number) {
    this.httpService.deleteTodoes(tid).subscribe(() => {
      this.getAllTasks()
    })
  }

  doneTask(tid: number) {
    this.httpService.getTodoesById(tid).subscribe((result) => {
      result.tstatus = 1;
      this.httpService.updateTodoes(result.tid, result).subscribe((result) => {
        this.getAllTasks()
      })
    })
  }
}
