import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-astromechs></my-astromechs>
  `
})
export class AppComponent {
  title = 'Tour of Astromechs';
}
