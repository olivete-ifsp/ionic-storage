import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilidadesTelaComponent } from 'src/app/util/utilidades-tela/utilidades-tela.component';

@Component({
  selector: 'app-cliente-dados',
  templateUrl: './cliente-dados.page.html',
  styleUrls: ['./cliente-dados.page.scss'],
})
export class ClienteDadosPage {

  public cliente:any;
  public cpf: string = "";
  public nome: string = "";
  public dataNascimento: string = ""
  public telefone: string = "";
  public endereco: string = "";
  public bairro: string = "";
  public cidade: string = "";
  public uf: string = "";

  public estados: string[] = [];

  constructor(
    private modalCtrl: ModalController,
    private utilidades: UtilidadesTelaComponent
  ) {
    this.estados = utilidades.getEstados();
    if (this.cliente != null)
        this.setCliente()
  }

  public setCliente()
  {
    this.cpf = this.cliente.cpf;
    this.nome = this.cliente.nome;
    this.dataNascimento = this.cliente.dataNascimento,
    this.telefone = this.cliente.telefone,
    this.endereco = this.cliente.endereco,
    this.bairro = this.cliente.bairro,
    this.cidade = this.cliente.cidade,
    this.uf =  this.cliente.uf    
  }

  public cancelar() {
    return this.modalCtrl.dismiss(null, 'cancelar');
  }

  public confirmar() {
    let cliente = {
        cpf: this.cpf,
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        telefone: this.telefone,
        endereco: this.endereco,
        bairro: this.bairro,
        cidade: this.cidade,
        uf: this.uf
    }
    return this.modalCtrl.dismiss(cliente, 'confirmar');
  }

}
