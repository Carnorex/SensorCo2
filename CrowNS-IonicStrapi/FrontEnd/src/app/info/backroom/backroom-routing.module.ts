import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackroomPage } from './backroom.page';

const routes: Routes = [
  {
    path: '',
    component: BackroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackroomPageRoutingModule {}
