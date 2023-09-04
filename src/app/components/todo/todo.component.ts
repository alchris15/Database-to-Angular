import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import {TodoserviceService } from './../../service/todoservice.service';
import { TodoModel } from 'src/app/models/todo.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
   
})

export class TodoComponent implements OnInit {

  constructor(private http:HttpClient, private todoserviceService: TodoserviceService) { }
  
  todos!: TodoModel[];
  todo = new TodoModel();
  inputTodo: string="";
  todoService: any;

  ngOnInit(): void { 
    this.todos = []
    this.todoserviceService.GetAllTodos()
    .subscribe((resp: TodoModel[]) => {
      this.todos = resp;
      console.log(this.todos);
    })
  }

  onTodoCreate(products: {pName: string}){
    console.log(products);
    this.http.post('http://localhost:3001/todos/create', products)
    .subscribe((res) => {
      console.log(res);
    })
  }
  
    
    
  }