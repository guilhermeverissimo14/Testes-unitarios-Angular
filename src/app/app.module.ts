import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomarTesteComponent } from './somar-teste/somar-teste.component';
import { VariavelTestComponent } from './variavel-test/variavel-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SomarTesteComponent,
    VariavelTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
