import {Component} from '@angular/core';
import {Pokemon} from "../interface/model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import {UtilsService} from "../service/utils.service";

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.css']
})
export class GenerateCodeComponent {
  pokemon: Pokemon = new Pokemon();
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
    this.check_valeur("name")
    this.check_valeur("type")
    this.check_valeur("date")
  }

  check_valeur(controlName: string) {
    const controlRequired = this.utils.checkControl(this.formulaire_Control, controlName, this.error, "required", this.upperCaseFirst(controlName)+" is required");
    if (!controlRequired) {
      this.utils.checkControl(this.formulaire_Control, controlName, this.error, "pattern", "Invalid Character");
    }

    let variable = this.formulaire_Control.controls;
    console.log(variable)
  }

  upperCaseFirst(text:string){
    return text.at(0)?.toUpperCase()+text.substring(1);
  }


}
