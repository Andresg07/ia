import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.scss'],
})
export class ListaMenuComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  onClickResumen() {
    this.authService.onResumenDia();
  }

  onClickVentasN() {
    this.authService.onVentasNuevas();
  }

  onClickVentasFec() {
    this.authService.onVentasFec();
  }

}
