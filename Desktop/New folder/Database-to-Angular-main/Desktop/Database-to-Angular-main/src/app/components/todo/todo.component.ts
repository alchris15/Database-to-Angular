import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import {TodoserviceService } from './../../service/todoservice.service';
import { TodoModel } from 'src/app/models/todo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  
})


export class TodoComponent implements OnInit {


  todos!: TodoModel[];
  inputTodo: string="";
  constructor(private todoserviceService: TodoserviceService) { }


  ngOnInit(): void { 
    this.todos = []
    this.todoserviceService.GetAllTodos()
    .subscribe((resp: TodoModel[]) => {
      this.todos = resp;
      console.log(this.todos);
    })

  }

 addTodo () {
   

   this.inputTodo ="";
  }
}
