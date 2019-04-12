import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClientListPage } from './client-list.page';
import { ComponentsModule } from 'src/app/components/components.module';
var routes = [
    {
        path: '',
        component: ClientListPage
    }
];
var ClientListPageModule = /** @class */ (function () {
    function ClientListPageModule() {
    }
    ClientListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [ClientListPage]
        })
    ], ClientListPageModule);
    return ClientListPageModule;
}());
export { ClientListPageModule };
//# sourceMappingURL=client-list.module.js.map