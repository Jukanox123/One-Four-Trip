import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Message2PageRoutingModule } from './message2-routing.module';

import { Message2Page } from './message2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Message2PageRoutingModule
  ],
  declarations: [Message2Page]
})
export class Message2PageModule {}
