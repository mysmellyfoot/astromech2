import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AstromechDetailComponent } from './astromech-detail.component';
import { AstromechsComponent } from './astromechs.component';
import { AstromechService }         from './astromech-service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AstromechDetailComponent,
    AstromechsComponent
  ],
  providers: [AstromechService]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
