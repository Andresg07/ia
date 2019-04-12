import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'client-list', loadChildren: './pages/client-list/client-list.module#ClientListPageModule' },
    { path: 'user-register', loadChildren: './pages/user-register/user-register.module#UserRegisterPageModule' },
    { path: 'concept', loadChildren: './pages/concept/concept.module#ConceptPageModule' },
    { path: 'summary-day', loadChildren: './pages/summary-day/summary-day.module#SummaryDayPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map