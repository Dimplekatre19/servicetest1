import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
@ViewChild('stdForm')stdForm!:NgForm
  constructor(
    private _uuidService:UuidService,
    private _studentService:StudentService
  ) { }

  ngOnInit(): void {
  }

  onStdAdd(){
    if(this.stdForm.valid){
      let stdObj={...this.stdForm.value,id:this._uuidService.generateUuid()}
      console.log(stdObj);
      this._studentService.onNewStdAdd(stdObj);
      this.stdForm.reset();
    }
     
  }
}
