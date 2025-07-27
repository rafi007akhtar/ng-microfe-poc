import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cmp2Component } from './cmp2/cmp2.component';

const routes: Routes = [
  {
    path: '',
    component: Cmp2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [Cmp2Component],
})
export class AppRoutingModule {}
