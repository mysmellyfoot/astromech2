import { Component } from '@angular/core';
import { Astromech } from './astromech';
import { AstromechDetailComponent } from './astromech-detail.component';

const ASTROMECHS: Astromech[] = [
  { id: 11, name: 'R2D4' },
  { id: 12, name: 'R2D5' },
  { id: 13, name: 'R2D6' },
  { id: 14, name: 'R2D7' },
  { id: 15, name: 'R2D8' },
  { id: 16, name: 'R4D4' },
  { id: 17, name: 'R5D4' },
  { id: 18, name: 'R6D4' },
  { id: 19, name: 'R7D4' },
  { id: 20, name: 'R8D4' }
];


@Component({
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'my-app'
})

export class AppComponent {
  title = 'Astromech';
  astromechs = ASTROMECHS;
  selectedAstromech: Astromech;
    onSelect(astromech: Astromech): void {
    this.selectedAstromech = astromech;
  }
}