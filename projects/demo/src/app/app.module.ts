import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GdsButtonModule } from '@gestio/gds';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GdsButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
