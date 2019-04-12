import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';
import { firebaseConfig, snapshotToArray } from '../../../environments/environment';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {

  items = [];
  ref = firebase.database().ref('items/');
// tslint:disable-next-line: no-inferrable-types
inputNumer: string = '';
// tslint:disable-next-line: no-inferrable-types
inputNombre: string = '';

  constructor(public authService: AuthService, private menuCtrl: MenuController,
     public navCtrl: NavController) {
    this.ref.on('value', resp => {
      this.items = snapshotToArray(resp);
    });
  }

  addItem(item) {
    // tslint:disable-next-line: prefer-const
        if (item !== undefined && item !== null) {
    // tslint:disable-next-line: prefer-const
        let newItem = this.ref.push();
        newItem.set(item);
        this.inputNumer = '';
        this.inputNombre = '';
  }
  }

  ngOnInit() {
  }

  onClickBack() {
    this.authService.onClickAtras();
  }

}
