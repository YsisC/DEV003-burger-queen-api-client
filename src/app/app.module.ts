import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthBqModule } from './auth-bq/auth-bq.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';




@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthBqModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
