import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConceptPage } from './concept.page';
import { ComponentsModule } from 'src/app/components/components.module';
var routes = [
    {
        path: '',
        component: ConceptPage
    }
];
var ConceptPageModule = /** @class */ (function () {
    function ConceptPageModule() {
    }
    ConceptPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [ConceptPage]
        })
    ], ConceptPageModule);
    return ConceptPageModule;
}());
export { ConceptPageModule };
//# sourceMappingURL=concept.module.js.map