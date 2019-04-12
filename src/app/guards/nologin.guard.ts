import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/';
import { promise } from 'protractor';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements NologinGuard {

  constructor(private Afauth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |Promise<boolean> | boolean {
      return this.Afauth.authState.pipe(map(auth => {
        if ((auth) === null) {
          return true;
        } else {
          this.router.navigate([ '/client-list' ]);
          return false;
        }
      }));
  }
}
