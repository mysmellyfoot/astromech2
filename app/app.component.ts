import { Component } from '@angular/core';
import { Astromech } from './astromech';
import { AstromechDetailComponent } from './astromech-detail.component';
import { AstromechService } from './astromech-service';

@Component({
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    selector: 'my-app'
    
})

export class AppComponent {
    title = 'Astromech';
    astromechs : Astromech[];
    selectedAstromech: Astromech;
    onSelect(astromech: Astromech): void {
        this.selectedAstromech = astromech;
    }
}