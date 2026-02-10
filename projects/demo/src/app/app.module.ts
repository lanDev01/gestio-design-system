import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GdsButtonModule, GdsInputModule } from '@gestio/gds';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AsideComponent],
  imports: [BrowserModule, AppRoutingModule, GdsButtonModule, GdsInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
