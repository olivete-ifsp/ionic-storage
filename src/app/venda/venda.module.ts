import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendaPage } from './venda.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VendaPageRoutingModule } from './venda-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VendaPageRoutingModule
  ],
  declarations: [VendaPage]
})
export class VendaPageModule {}
