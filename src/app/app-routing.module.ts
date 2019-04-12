import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [NologinGuard] },
  { path: 'client-list', loadChildren: './pages/client-list/client-list.module#ClientListPageModule', canActivate: [AuthGuard] },
  { path: 'user-register', loadChildren: './pages/user-register/user-register.module#UserRegisterPageModule' },
  { path: 'concept', loadChildren: './pages/concept/concept.module#ConceptPageModule' },
  { path: 'summary-day', loadChildren: './pages/summary-day/summary-day.module#SummaryDayPageModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesPageModule' },
  { path: 'app-acerca', loadChildren: './pages/app-acerca/app-acerca.module#AppAcercaPageModule' },
  { path: 'client-info', loadChildren: './pages/client-info/client-info.module#ClientInfoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
