import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cliente',
        loadChildren: () => import('../cliente/cliente.module').then(m => m.ClientePageModule)
      },
      {
        path: 'produto',
        loadChildren: () => import('../produto/produto.module').then(m => m.ProdutoPageModule)
      },
      {
        path: 'venda',
        loadChildren: () => import('../venda/venda.module').then(m => m.VendaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cliente',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cliente',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
