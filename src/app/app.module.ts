import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { GenerateCodeComponent } from './generate-code/generate-code.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },{
    path: 'generate-code',
    component: GenerateCodeComponent,
    title: 'Generate Code'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenerateCodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatBadgeModule, MatButtonModule, MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
