import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp2Component } from './cmp2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Cmp2Component,
  },
];

@NgModule({
  declarations: [Cmp2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [Cmp2Component],
})
export class Remote2Module {}
