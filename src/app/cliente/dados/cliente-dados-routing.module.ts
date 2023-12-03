import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteDadosPage } from './cliente-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteDadosPageRoutingModule {}
