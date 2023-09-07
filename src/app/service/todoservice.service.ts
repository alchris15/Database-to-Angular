import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
  constructor(private http:HttpClient) { }
 private _refreshNeeded$ = new Subject<void>();

 get refreshNeeded$(){
  return this. _refreshNeeded$;
 }

  BaseApi: string = 'http://localhost:3001/todos/getalltodos';
  url: string ='http://localhost:3001/todos/Delete?id=';
  
GetAllTodos(): Observable<any>{
  return this.http.get<any[]>(`${this.BaseApi}`)
      } 

deleteTodos( id:any ){
return this.http.get(`${this.url}${id}`);
}
}
