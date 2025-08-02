import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Remote2Module } from './remote2/remote2.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Remote2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
