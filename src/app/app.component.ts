import { Component } from '@angular/core';
import { TodoserviceService } from './service/todoservice.service';
import { TodoModel } from './models/todo.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent {
  title = 'To-Do-List';
 
  constructor(private http:HttpClient){}

  onTodoCreate(products: {pName: string}){
    console.log(products);
    this.http.post('http://localhost:3001/todos/create', products)
    .subscribe((res) => {
      console.log(res);
    })
  }
  }
  