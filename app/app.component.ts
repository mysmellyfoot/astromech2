import { Component } from '@angular/core';
import { Astromech } from './astromech';
import { AstromechDetailComponent } from './astromech-detail.component';
import { AstromechService } from './astromech-service';
import { OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    selector: 'my-app',
    providers: [AstromechService]
})

export class AppComponent implements OnInit {
    ngOnInit(): void { this.getAstromechs();}
    title = 'Astromech';
    astromechs: Astromech[];
    selectedAstromech: Astromech;
    onSelect(astromech: Astromech): void {
        this.selectedAstromech = astromech;
    }
    constructor(private astromechService: AstromechService) { }
    getAstromechs(): void {
        this.astromechService.getAstromechs().then(astromechs => this.astromechs = astromechs);
    }
}