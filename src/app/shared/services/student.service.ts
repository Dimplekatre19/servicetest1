import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { Istd } from '../models/std';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stdArr:Array<Istd>=[
    {
      fname:"jhon",
      lname:"doe",
      email:"jhon20@gmail.com",
      contact:9898395344,
      id:"1234"
    },
    {
      fname:"may",
      lname:"doe",
      email:"may670@gmail.com",
      contact:7722395444,
      id:"1235"
    },
    {
      fname:"james",
      lname:"deo",
      email:"james455@gmail.com",
      contact:7228887754,
      id:"1236"
    }
  ]
  constructor(
    private _snackbar:SnackbarService
  ) { }

  fetchAllStd(){
    return this.stdArr
  }

  onNewStdAdd(stdobj:Istd){
      this.stdArr.push(stdobj)
      this._snackbar.opensnackbar(`NEW STUDENT ${stdobj.fname} ADDEDD SUCCESSFULLYYY!!!`)
  }

  removestudent(id:string){
      let getindex=this.stdArr.findIndex(std=>std.id===id)
      let removeobj=this.stdArr[getindex]
      this.stdArr.splice(getindex,1)
      this._snackbar.opensnackbar(`STUDENT ${removeobj.fname} IS REMOVED SUCCESSFULLYY!!!`)
  }
}
