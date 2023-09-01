import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
  constructor(private http: HttpClient){}
  BaseApi: string = 'http://localhost:3001/todos/getalltodos';
  

GetAllTodos(): Observable<any>{
  return this.http.get<any[]>(`${this.BaseApi}`)
      }

// add model   or use string
//fix wrong URL   


  
}