import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, MenuController } from '@ionic/angular';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})



export class ClientListPage implements OnInit {

@ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll;

// creamos el arreglo para guardar los datos
data: any[] = Array(10);

  constructor( public authService: AuthService, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  // metodos
  onClickAdd() {
    this.authService.onClickAddUser();
  }

  // metodo para mostrar el menu en la lista de clientes
  onClickMenu() {
    this.menuCtrl.toggle();
  }
  // *****

  onClickResumen() {
    this.authService.onResumenDia();
  }

  onClickInfo() {
    this.authService.onInfoCliente();
  }

  onClickEditar() {
    this.authService.onEditCliente();
  }

  loadData(event) {
    console.log('Cargando...');

    setTimeout(() => {

      // si los registros dentro de data es mayor a 100, deja de cargar los datos
      if ( this.data.length > 20 ) {
        event.target.complete();
        this.infitniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(10);
      this.data.push( ...nuevoArr );
      event.target.complete();
    }, 1000);
  }
}
