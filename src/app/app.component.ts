import { Component } from '@angular/core';
import { TodoserviceService } from './service/todoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';
  GetAllTodos:any;
  constructor(private todoService:TodoserviceService)
{
  this.todoService.GetAllTodos().subscribe((data)=>{
    console.log("data",data);
  this.GetAllTodos=data;
}
)
}}