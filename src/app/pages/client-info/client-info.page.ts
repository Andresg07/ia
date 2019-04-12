import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.page.html',
  styleUrls: ['./client-info.page.scss'],
})
export class ClientInfoPage implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  onClickEditar() {
this.authService.onEditCliente();
  }

}
