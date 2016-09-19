import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { AstromechDetailComponent } from './astromech-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AstromechDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
