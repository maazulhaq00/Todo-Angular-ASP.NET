import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from './interfaces/ITodo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "https://localhost:7004/api/Todoes/"

  constructor(private httpClient: HttpClient) { }

  public getTodoes() {
    return this.httpClient.get(this.baseUrl)
  }
  public getTodoesById(tid: number) {
    return this.httpClient.get(this.baseUrl + tid)
  }
  public createTodoes(todo: ITodo) {
    return this.httpClient.post(this.baseUrl, todo)
  }
  public updateTodoes(tid: number, todo: ITodo) {
    return this.httpClient.put(this.baseUrl + tid, todo)
  }
  public deleteTodoes(tid: number) {
    return this.httpClient.delete(this.baseUrl + tid)
  }
}