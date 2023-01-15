import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';

 

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from "@angular/common";

const routes: Routes = [

  
  { path: '', component: LandingComponent},
];

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
