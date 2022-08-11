import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'graphic',
    loadChildren: () => import('./info/graphic/graphic.module').then( m => m.GraphicPageModule)
  },
  {
    path: 'sensors',
    loadChildren: () => import('./info/sensors/sensors.module').then( m => m.SensorsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./info/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./info/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-acount',
    loadChildren: () => import('./info/create-acount/create-acount.module').then( m => m.CreateAcountPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./info/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./info/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'backroom',
    loadChildren: () => import('./info/backroom/backroom.module').then( m => m.BackroomPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
