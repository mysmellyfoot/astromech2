import { Component, Input } from '@angular/core';
import { Astromech } from './astromech';

@Component({
  selector: 'my-astromech-detail',
  template: `<div *ngIf="astromech">
<h2>{{astromech.name}} details!</h2>
<div><label>id: </label>{{astromech.id}}</div>
<div><label>name: </label><input [(ngModel)]="astromech.name" placeholder="name"></div>
</div>`
})

export class AstromechDetailComponent {
  @Input()
  astromech: Astromech;
}

