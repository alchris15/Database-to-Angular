import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TodoModel} from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  users: any;
  constructor(private http: HttpClient){}
  url = 'http://localhost:3001/todos/GetAllTodos';
  

GetAllTodos(): Observable<any>{
  return this.http.get(`${this.url}`)
      }
CreateNewTodo(data:any): Observable<any>{
        return this.http.post(`${this.url}`, data);


    }

  
  }