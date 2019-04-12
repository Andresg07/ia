import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login(  email: string, password: string ) {

// tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, rejected) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  // Metodo al que es llamado en la lista de clientes
  logout() {

    this.afAuth.auth.signOut();

    this.router.navigate(['/login']);
  }

  onClickBMenu() {
    this.router.navigate(['']);
  }

  onClickAddUser() {
    this.router.navigate(['/user-register']);
  }

  onClickAtras() {
    this.router.navigate(['/client-list']);
  }

  onAcercaDe() {
    this.router.navigate(['/app-acerca']);
  }

// Resumen de ventas
  onResumenDia() {
    this.router.navigate(['/summary-day']);
  }

  // Ventas nuevas
  onVentasNuevas() {
    this.router.navigate(['/user-register']);
  }

  // Ventas de otras Fechas
  onVentasFec() {
    this.router.navigate(['/']);
  }

  // Informacion del clientes
  onInfoCliente() {
    this.router.navigate(['/client-info']);
  }

  // Editar informacion de un clientes
  onEditCliente() {
    this.router.navigate(['/']);
  }



}
