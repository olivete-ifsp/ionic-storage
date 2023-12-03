import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePage } from './cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePage,
  },
  {
    path: 'cliente-dados',
    loadChildren: () => import('./dados/cliente-dados.module').then( m => m.ClienteDadosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePageRoutingModule {}
