import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  // Metodo para salir de la app
  onClickExit() {
    this.authService.logout();
  }

  onClickAbout() {
    this.authService.onAcercaDe();
  }

}
