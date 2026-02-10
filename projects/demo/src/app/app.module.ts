import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GdsButtonModule } from '@gestio/gds';
import { HeaderComponent } from './layout/header/header.component';
import { AsideComponent } from './layout/aside/aside.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AsideComponent],
  imports: [BrowserModule, AppRoutingModule, GdsButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
