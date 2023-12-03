import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDadosPageRoutingModule } from './cliente-dados-routing.module';

import { ClienteDadosPage } from './cliente-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDadosPageRoutingModule
  ],
  declarations: [ClienteDadosPage]
})
export class ClienteDadosPageModule {}
