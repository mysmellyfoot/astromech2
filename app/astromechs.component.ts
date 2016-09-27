import { Component } from '@angular/core';
import { Astromech } from './astromech';
import { AstromechDetailComponent } from './astromech-detail.component';
import { OnInit } from '@angular/core';
import { AstromechService }         from './astromech-service';

@Component({
    moduleId: module.id,
    templateUrl: '../app/astromechs.component.html',
    styleUrls: ['../app/astromechs.component.css'],
    selector: 'my-astromechs'
})

export class AstromechsComponent implements OnInit {
    ngOnInit(): void { this.getAstromechs();}
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