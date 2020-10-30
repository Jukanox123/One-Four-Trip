import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilmvpPageRoutingModule } from './accueilmvp-routing.module';

import { AccueilmvpPage } from './accueilmvp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilmvpPageRoutingModule
  ],
  declarations: [AccueilmvpPage]
})
export class AccueilmvpPageModule {}
