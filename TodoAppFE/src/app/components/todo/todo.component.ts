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
      tid: 0,
      tname: this.TaskForm.value.tname!
    }

    this.httpService.createTodoes(todoObject).subscribe((result) => {
      console.log(result);
      this.TaskForm.patchValue({ tname: "" });
      this.getAllTasks()
    })
  }

}
