import { Component, OnInit } from '@angular/core';
import { TodoTask } from 'src/app/model/todo-task';
import { MatTableDataSource } from '@angular/material';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task:string ;
  isDone:false;
  tasks:TodoTask[];
  displayedColumns: string[] = ['task','delete/edit'];
   dataSource = new MatTableDataSource<TodoTask>(this.tasks);
  constructor(private todoService:TodoService) {}

ngOnInit() {
  this.getTask();
  // this.dataSource=new MatTableDataSource<TodoTask>(this.tasks);
    //  }
}
getTask(){
  this.todoService.getTask()
  .subscribe(tasks=>{this.tasks=tasks})
  // this.dataSource=new MatTableDataSource<TodoTask>(this.tasks);
 
}
add(task:string) {
let newTask  = new TodoTask(this.task);
this.todoService.postTask(newTask).subscribe(task=>{
  
  this.getTask();
  this.task="";
  this.dataSource.data=this.tasks
 
});
   }

  onEdit(task) {
    let newTask  = new TodoTask(this.task);

this.todoService.putTask(task._id,newTask).subscribe( res => {
  this.getTask();
});
  }

remove(task) {
 
this.todoService.deleteTask(task._id).subscribe(task=>{

  this.getTask();
})
  }

moveToDone(task) 
{
  task.isDone= true ;
}
}

 
  

 

