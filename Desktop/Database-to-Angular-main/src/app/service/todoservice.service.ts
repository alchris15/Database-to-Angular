import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TodoModel} from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
  url = ('http://localhost:3001/todos/GetAllTodos');
  
constructor(private http: HttpClient) {}
GetAllTodos(): Observable<TodoModel[]>{
  return this.http.get<any[]>(this.url)
      }
    }
  