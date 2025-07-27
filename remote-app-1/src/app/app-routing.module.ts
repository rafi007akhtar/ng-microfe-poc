import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: Cmp1Component,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [Cmp1Component],
})
export class AppRoutingModule {}
