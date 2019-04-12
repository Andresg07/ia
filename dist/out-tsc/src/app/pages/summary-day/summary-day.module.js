import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SummaryDayPage } from './summary-day.page';
import { ComponentsModule } from 'src/app/components/components.module';
var routes = [
    {
        path: '',
        component: SummaryDayPage
    }
];
var SummaryDayPageModule = /** @class */ (function () {
    function SummaryDayPageModule() {
    }
    SummaryDayPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [SummaryDayPage]
        })
    ], SummaryDayPageModule);
    return SummaryDayPageModule;
}());
export { SummaryDayPageModule };
//# sourceMappingURL=summary-day.module.js.map