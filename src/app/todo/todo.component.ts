import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


taskList: Todo[] = [];
todoItem: string;

constructor() { }


addTask() {
  let todo = new Todo();
  todo.name = this.todoItem;
  todo.isTaskDone=false
  todo.isCompleted=false
  this.taskList.push(todo)
  window.localStorage.setItem('task', JSON.stringify(this.taskList))
  this.todoItem = '';
}

taskCompleted(id:number) {
  this.taskList[id].isCompleted = true;
  window.localStorage.setItem('task', JSON.stringify(this.taskList))
}

// removeTask(i: any) {
//   this.taskList.splice(i, 1)
//   window.localStorage.setItem('task', JSON.stringify(this.taskList))
  
// }

markAsDone(id:number) {
this.taskList[id].isTaskDone = !this.taskList[id].isTaskDone
window.localStorage.setItem('task', JSON.stringify(this.taskList))

}
ngOnInit(): void {
 
  this.taskList = JSON.parse(localStorage.getItem('task') || 'Todo[]');
}

}
