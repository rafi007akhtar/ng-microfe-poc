import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'remote1',
    loadChildren: () =>
      import('remoteApp1/RemoteModule').then((m: any) => m.RemoteModule),
  },
  // {
  //   path: 'remote2',
  //   loadChildren: () =>
  //     import('remoteApp2/RemoteModule').then((m: any) => m.RemoteModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
