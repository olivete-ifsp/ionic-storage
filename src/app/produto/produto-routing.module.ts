import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoPage } from './produto.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoPage,
  },
  {
    path: 'produto-dados',
    loadChildren: () => import('./produto-dados/produto-dados.module').then( m => m.ProdutoDadosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoPageRoutingModule {}
