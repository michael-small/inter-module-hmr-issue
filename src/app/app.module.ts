import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AModule,
    BModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
