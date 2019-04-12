import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss'],
})
export class ButtonBackComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}


  onClickBack() {
    this.authService.onClickAtras();
  }
}
