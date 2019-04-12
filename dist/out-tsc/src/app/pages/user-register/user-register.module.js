import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserRegisterPage } from './user-register.page';
import { ComponentsModule } from 'src/app/components/components.module';
var routes = [
    {
        path: '',
        component: UserRegisterPage
    }
];
var UserRegisterPageModule = /** @class */ (function () {
    function UserRegisterPageModule() {
    }
    UserRegisterPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [UserRegisterPage]
        })
    ], UserRegisterPageModule);
    return UserRegisterPageModule;
}());
export { UserRegisterPageModule };
//# sourceMappingURL=user-register.module.js.map