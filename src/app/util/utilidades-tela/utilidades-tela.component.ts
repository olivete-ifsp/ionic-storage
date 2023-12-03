import { Component, Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-utilidades-tela',
  templateUrl: './utilidades-tela.component.html',
  styleUrls: ['./utilidades-tela.component.scss'],
})

@Injectable({
  providedIn: 'root',
})
export class UtilidadesTelaComponent {
  
  public botoes = [
    {
      text: 'Sim',
      role: 'sim',
    },
    {
      text: 'Não',
      role: 'nao',
    },
  ];

  constructor(
            private alertController : AlertController,
            private toastController : ToastController
  ) { }

  public getEstados(): string[]
  {
    return ["SP", "MG", "MS", "PR"];
  }

  async apresentarAlerta(titulo: string, mensagem:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: this.botoes,
    });

    await alert.present();
  }

  async apresentarMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

}
