import { Component, Input } from '@angular/core';
import { Astromech } from './astromech';

@Component({
  selector: 'my-astromech-detail',
  templateUrl: 'app/astromech-detail.component.html',
  styleUrls: ['app/astromech-detail.component.css']
})

export class AstromechDetailComponent {
  @Input()
  astromech: Astromech;
}

