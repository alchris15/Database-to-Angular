import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './../../models/Todo';
import {TodoserviceService } from './../../service/todoservice.service';
import { TodoModel } from 'src/app/models/todo.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/products';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
   
})
 
export class TodoComponent implements OnInit {

  constructor(private http:HttpClient, private todoserviceService: TodoserviceService) { }
  message: boolean=false;
  todos!: TodoModel[];
  todo = new TodoModel();
  inputTodo: string="";
  todoService: any;
  editMode: boolean = false;
  currentTodoId: string;
 @ViewChild('todoForm') form: NgForm;

  

  ngOnInit(): void { 
    this.todos = []
    this.todoserviceService.GetAllTodos()

    
    
    .subscribe((resp: TodoModel[]) => {
      this.todos = resp;
      console.log(this.todos);
    })    
    
  }
  deleteTodos( todo_id:any ){
    console.log(todo_id);
    this.todoserviceService.deleteTodos(todo_id).subscribe((res) =>
    //console.log(res));
    this.ngOnInit());
  }

  
 
  onTodoCreate(products: {pName: string}){
    if(!this.editMode)
    console.log(products);
    this.http.post<{name: string}>
    ('http://localhost:3001/todos/create', products)
    .subscribe((res) => {
      //console.log(res);
      this.ngOnInit();
      this.todoserviceService.updateTodo(this.currentTodoId, products);
    
    })   
  }

onEditClicked(todolist:string){
  this.currentTodoId = todolist;
  let currentTodo = this.todos.find((p) => {return p.todolist === todolist});
  console.log(this.form);
  this.form.setValue({
    todolist: currentTodo.todolist,
   
  });
  this.editMode = true;
}
}