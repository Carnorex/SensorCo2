import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAcountPageRoutingModule } from './create-acount-routing.module';

import { CreateAcountPage } from './create-acount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateAcountPageRoutingModule
  ],
  declarations: [CreateAcountPage]
})
export class CreateAcountPageModule {}
