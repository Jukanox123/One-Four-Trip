import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Message3Page } from './message3.page';

const routes: Routes = [
  {
    path: '',
    component: Message3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Message3PageRoutingModule {}
