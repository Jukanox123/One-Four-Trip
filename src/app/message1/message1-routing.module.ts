import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Message1Page } from './message1.page';

const routes: Routes = [
  {
    path: '',
    component: Message1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Message1PageRoutingModule {}
