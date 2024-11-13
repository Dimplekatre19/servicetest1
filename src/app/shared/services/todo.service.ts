import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todos:Array<Itodo>=[
    {
      todoItem:"Angular 18",
      todoId:"1234"
    },
    {
      todoItem:"Node 18",
      todoId:"1235"
    },
    {
      todoItem:"RXJS",
      todoId:"1236"
    }

   ]
  constructor(
    private _snackbar:SnackbarService
  ) { }

  fetchAllTodos(){
    return  this.todos
  }
   
  onnewTodoAdd(todo:Itodo){
      this.todos.push(todo);
      this._snackbar.opensnackbar(`NEW TODO ${todo.todoItem} ADDEDD SUCCESSFULLYY!!!`)
  }

  removeTodo(id:string){
     let getIndex=this.todos.findIndex(todo=>todo.todoId===id)
     let removeObj=this.todos[getIndex]
     this.todos.splice(getIndex,1);
     this._snackbar.opensnackbar(`TODO ITEM ${removeObj.todoItem} REMOVED SUCCESSFULLYY!!`)
  }

}
