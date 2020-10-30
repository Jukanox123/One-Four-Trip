import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Message3PageRoutingModule } from './message3-routing.module';

import { Message3Page } from './message3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Message3PageRoutingModule
  ],
  declarations: [Message3Page]
})
export class Message3PageModule {}
