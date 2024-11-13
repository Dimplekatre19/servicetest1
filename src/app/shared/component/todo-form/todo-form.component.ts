import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm')todoForm!:NgForm
  constructor(
    private _todoService:TodoService,
    private _uuidService:UuidService
  ) { }

  ngOnInit(): void {
  }
  onTodoAdd(){
     if(this.todoForm.valid){
        let todoObj={...this.todoForm.value,todoId:this._uuidService.generateUuid()}
        console.log(todoObj);
        this._todoService.onnewTodoAdd(todoObj)
        this.todoForm.reset();
     }
  }
}
