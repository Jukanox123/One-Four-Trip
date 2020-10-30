import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Message2Page } from './message2.page';

const routes: Routes = [
  {
    path: '',
    component: Message2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Message2PageRoutingModule {}
