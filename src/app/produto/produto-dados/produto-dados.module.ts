import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoDadosPageRoutingModule } from './produto-dados-routing.module';

import { ProdutoDadosPage } from './produto-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoDadosPageRoutingModule
  ],
  declarations: [ProdutoDadosPage]
})
export class ProdutoDadosPageModule {}
