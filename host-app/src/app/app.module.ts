import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     pathMatch: 'full',
//   },
//   {
//     path: 'remote1',
//     loadChildren: () =>
//       import('remote1/Remote1Module' as any).then((m) => m.Remote1Module),
//   },
//   {
//     path: 'remote2',
//     loadChildren: () =>
//       import('remote2/Remote2Module' as any).then((m) => m.Remote2Module),
//   },
// ];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
