import {Component} from '@angular/core';
import {Pokemon} from "../interface/model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import {UtilsService} from "../service/utils.service";
import {formatDate} from '@angular/common'

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.css']
})
export class GenerateCodeComponent {

  pokemons: Pokemon[] = [];

  error: any = {};
  formulaire_Control: any;

  constructor(
    private snackbar: MatSnackBar,
    private utils: UtilsService,
    private formBuilder: FormBuilder) {
    this.formulaire_Control = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.pattern(utils.patternText())
      ]],
      type: ['', [
        Validators.required,
        Validators.pattern(utils.patternText())
      ]],
      date: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
    this.init_error();
  }

  init_error() {
    this.error.name = this.utils.generateErrorHandling();
    this.error.type = this.utils.generateErrorHandling();
    this.error.date = this.utils.generateErrorHandling();

  }

  Control_Valeur() {
    let error = this.check_valeur("name")
    console.log(error)
    error = this.check_valeur("type")
    console.log(error)
    error = this.check_valeur("date")
    console.log(error)
    if(!error){
      this.capture() ;
      this.utils.resetAllErrors(this.formulaire_Control)
    }

  }

  check_valeur(controlName: string) {
    console.log(this.getValue(controlName))
    let controlRequired = this.utils.checkControl(this.formulaire_Control, controlName, this.error, "required", this.utils.upperCaseFirst(controlName)+" is required");
    console.log(controlRequired)
    if (!controlRequired) {
      controlRequired = this.utils.checkControl(this.formulaire_Control, controlName, this.error, "pattern", "Invalid Character");
    }
    console.log(controlRequired)
    return controlRequired ;

  }


  getValue(controlName:string){
    return this.formulaire_Control.get(controlName).value;
  }

  capture(){
    let pokemon = new Pokemon();
    pokemon.setName(this.getValue("name"))
    pokemon.setType(this.getValue("type"))
    pokemon.setDate(formatDate(this.getValue("date"),'yyyy-MM-dd','en-US'))
    this.pokemons.push(pokemon) ;
    console.log(this.pokemons)
  }


}
