import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(authoService, router) {
        this.authoService = authoService;
        this.router = router;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    // Metodo que llama al boton acceder en el login con sus variables
    LoginPage.prototype.onLoginSubmit = function () {
        var _this = this;
        // servicio que llama a la funcion login
        // this.authoService.login({this.email, this.password});
        this.authoService.login(this.email, this.password).then(function (res) {
            _this.router.navigate(['/client-list']);
        }).catch(function (err) { return alert('Los datos son incorrectos o usuario no Existe!'); });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map