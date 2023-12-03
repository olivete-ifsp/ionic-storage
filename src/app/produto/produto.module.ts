import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoPage } from './produto.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProdutoPageRoutingModule } from './produto-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProdutoPageRoutingModule
  ],
  declarations: [ProdutoPage]
})
export class ProdutoPageModule {}
