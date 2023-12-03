import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteDadosPage } from './dados/cliente-dados.page';
import { ClienteStorageService } from '../storage/cliente.storage.service';
import { UtilidadesTelaComponent } from '../util/utilidades-tela/utilidades-tela.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'cliente.page.html',
  styleUrls: ['cliente.page.scss']
})

export class ClientePage {

  alertButtons = ['Action'];
  public clientes :any[] =[] 

  constructor(
    private modalCtrl: ModalController,
    private clienteStorage: ClienteStorageService,
    private utilidades: UtilidadesTelaComponent
  ) {
    clienteStorage.ler()
      .then (
        (clientes) => {
          this.clientes = clientes
          utilidades.apresentarMensagem(`${this.clientes.length} clientes foram carregados.`)
        }
      );
  }

  public tratarBusca(event:any)
  {
    if (event.event.target.value.length > 0)
    {

    }
  }

  async adicionarCliente() {
    let cliente:any = null;
    const janelaModal = await this.modalCtrl.create({
      component: ClienteDadosPage,
      componentProps: cliente
    });
    janelaModal.present();

    const { data, role } = await janelaModal.onWillDismiss();
    console.log(data)
    console.log(role)

    if (role === 'confirmar') {
        this.clientes.push(data)
        this.clienteStorage.gravar(this.clientes)
          .then( 
            () => {
                this.utilidades.apresentarMensagem("Cliente Cadastrado.")
            }
          )
          .catch( 
            () => {
                this.utilidades.apresentarMensagem("Erro ao cadastrar o cliente.")
            }
          )
    }
  }

  public excluirCliente(posicao: number)
  {
    this.utilidades.apresentarAlerta("Exclusão de Clientes", "Confirma a exclusão?")
    .then (
      (evento) => {
        console.log(evento)
        this.clientes.splice(posicao, 1)
        this.clienteStorage.gravar(this.clientes)
          .then( 
            () => {
                this.utilidades.apresentarMensagem("Cliente Excluído.")
            }
          )
          .catch( 
            () => {
                this.utilidades.apresentarMensagem("Erro ao excluir o cliente.")
            }
          )
      }
    )
    
  }

  public async editarCliente(posicao: number)
  {
    const janelaModal = await this.modalCtrl.create({
      component: ClienteDadosPage,
      componentProps: this.clientes[posicao]
    });
    janelaModal.present();

    const { data, role } = await janelaModal.onWillDismiss();

    if (role === 'confirmar') {
        this.clientes[posicao] = data
        this.clienteStorage.gravar(this.clientes)
          .then( 
            () => {
                this.utilidades.apresentarMensagem("Cliente Cadastrado.")
            }
          )
          .catch( 
            () => {
                this.utilidades.apresentarMensagem("Erro ao cadastrar o cliente.")
            }
          )
    }
  }
}
