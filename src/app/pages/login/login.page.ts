import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // captura los datos de login.html en las variables: username, password
  email: string;
  password: string;

  constructor(private authoService: AuthService, public router: Router) { }
  ngOnInit() {
  }

  // Metodo que llama al boton acceder en el login con sus variables
  onSubmitlogin() {
    // servicio que llama a la funcion login
    // this.authoService.login({this.email, this.password});
    this.authoService.login(this.email, this.password).then(res => {
      this.router.navigate(['/client-list']);
    }).catch(err => alert('Los datos son incorrectos o usuario no Existe!'));
  }
}
