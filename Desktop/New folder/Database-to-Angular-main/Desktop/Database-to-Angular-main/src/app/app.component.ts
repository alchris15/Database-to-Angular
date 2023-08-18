import { Component } from '@angular/core';
import { TodoserviceService } from './service/todoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';

  list:any[]=[];
  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }
  users:any;
  constructor(private todoService:TodoserviceService){}
  
  ngOninit():void{
    this.GetAllTodos();
  }
  

  GetAllTodos(){
  this.todoService.GetAllTodos().subscribe((res)=>{
    this.users = res.data;

});

}
}
