import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackroomPageRoutingModule } from './backroom-routing.module';

import { BackroomPage } from './backroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackroomPageRoutingModule
  ],
  declarations: [BackroomPage]
})
export class BackroomPageModule {}
