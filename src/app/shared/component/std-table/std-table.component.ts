import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
 stdArr!:Array<Istd>
  constructor(
    private _studentService:StudentService
  ) { }

  ngOnInit(): void {
    this.stdArr= this._studentService.fetchAllStd();
  }

  onstdremove(id:string){
    let getConfirm:boolean=confirm('Are you sure,you want to remove this student?')
    if(getConfirm){
       this._studentService.removestudent(id)
    }
  }
}
