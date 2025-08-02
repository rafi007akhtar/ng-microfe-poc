import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Remote1Module } from './remote1/remote1.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Remote1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
