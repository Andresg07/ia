import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ClientListPage = /** @class */ (function () {
    function ClientListPage() {
        // creamos el arreglo para guardar los datos
        this.data = Array(10);
    }
    ClientListPage.prototype.ngOnInit = function () {
    };
    ClientListPage = tslib_1.__decorate([
        Component({
            selector: 'app-client-list',
            templateUrl: './client-list.page.html',
            styleUrls: ['./client-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ClientListPage);
    return ClientListPage;
}());
export { ClientListPage };
//# sourceMappingURL=client-list.page.js.map