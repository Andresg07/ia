import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (_resolve, _rejected) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
                _resolve(user);
            }).catch(function (err) { return _rejected(err); });
        });
        // try {
        //   const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
        //   console.log('Estas logeado' + res);
        // } catch (err) {
        //   console.dir(err);
        //   if ( err.code === 'auth/user-not-found' ) {
        //     console.log( 'user not found' );
        //   }
        // }
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map