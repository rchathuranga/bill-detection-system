import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
