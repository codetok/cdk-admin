import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailComponent } from './mail/mail.component';

const routes: Routes = [
  {path: 'mail', component: MailComponent ,data: { animation: 'mail' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule {
}
