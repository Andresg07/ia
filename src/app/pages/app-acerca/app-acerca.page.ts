import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-app-acerca',
  templateUrl: './app-acerca.page.html',
  styleUrls: ['./app-acerca.page.scss'],
})
export class AppAcercaPage implements OnInit {

  constructor(public authService: AuthService ) {}

  ngOnInit() {
  }

}
