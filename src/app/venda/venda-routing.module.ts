import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendaPage } from './venda.page';

const routes: Routes = [
  {
    path: '',
    component: VendaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaPageRoutingModule {}
