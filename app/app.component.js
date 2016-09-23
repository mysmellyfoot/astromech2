"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var astromech_service_1 = require('./astromech-service');
var AppComponent = (function () {
    function AppComponent(astromechService) {
        this.astromechService = astromechService;
        this.title = 'Astromech';
    }
    AppComponent.prototype.ngOnInit = function () { this.getAstromechs(); };
    AppComponent.prototype.onSelect = function (astromech) {
        this.selectedAstromech = astromech;
    };
    AppComponent.prototype.getAstromechs = function () {
        var _this = this;
        this.astromechService.getAstromechs().then(function (astromechs) { return _this.astromechs = astromechs; });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            selector: 'my-app',
            providers: [astromech_service_1.AstromechService]
        }), 
        __metadata('design:paramtypes', [astromech_service_1.AstromechService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map