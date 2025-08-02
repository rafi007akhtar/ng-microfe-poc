import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp1Component } from './cmp1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Cmp1Component,
  },
];

@NgModule({
  declarations: [Cmp1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [Cmp1Component], // I'm guessing this is the line that would enable the sharing of this component
})
export class Remote1Module {}
