import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-button-toolbar',
  templateUrl: './button-toolbar.component.html',
  styleUrls: ['./button-toolbar.component.scss'],
})
export class ButtonToolbarComponent implements OnInit {

  constructor(public authService: AuthService, private menuCtrl: MenuController) { }

  ngOnInit() {}


}
