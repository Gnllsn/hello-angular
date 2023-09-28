import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  patternText(){
    return "^[a-zA-Z]{1,}[a-zA-Zéàçèù _-]*$" ;
  }

  generateErrorHandling(){
    let error : any =  {} ;
    error.css = "" ;
    error.bool = false ;
    error.texte = "" ;
    return error ;
  }

  checkControl(formulaire_Control:FormGroup,field:string,error:any,controlName:string,messageError:string){
    if(formulaire_Control.controls[field].errors?.[controlName]){
      error[field].bool = true ;
      error[field].css = "invalid-feedback";
      error[field].texte = messageError ;
      return true ;
    }else{
      error[field].bool = false ;
      error[field].css = "is-valid";
      error[field].texte = "" ;
      return false ;
    }
  }
}
