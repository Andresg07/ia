import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { ListaMenuComponent } from './lista-menu/lista-menu.component';
import { ButtonBackComponent } from './button-back/button-back.component';
import { ButtonToolbarComponent } from './button-toolbar/button-toolbar.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent,
    children: [
      { path: 'about', loadChildren: '../app-acerca/app-acerca.module#AppAcercaPageModule'}
    ]
  }
];


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListaMenuComponent,
    ButtonBackComponent,
    ButtonToolbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListaMenuComponent,
    ButtonBackComponent,
    ButtonToolbarComponent
  ],
})
export class ComponentsModule { }
