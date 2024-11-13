import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr!:Array<Itodo>;
  constructor(
    private _todoService:TodoService
  ) { }

  ngOnInit(): void {
      this.todosArr=this._todoService.fetchAllTodos();
  }
  onTodoRemove(id:string){
    let getConfirm:boolean=confirm('Are you sure,you want to remove this todo?')
    if(getConfirm){
     this._todoService.removeTodo(id)
    }
  }
 
}
