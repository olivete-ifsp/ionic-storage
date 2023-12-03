import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutoStorageService } from '../storage/produto.storage.service';
import { UtilidadesTelaComponent } from '../util/utilidades-tela/utilidades-tela.component';
import { ProdutoDadosPage } from './produto-dados/produto-dados.page';

@Component({
  selector: 'app-produto',
  templateUrl: 'produto.page.html',
  styleUrls: ['produto.page.scss']
})
export class ProdutoPage {
  alertButtons = ['Action'];
  public produtos: any[] = []

  constructor(
    private modalCtrl: ModalController,
    private produtoStorage: ProdutoStorageService,
    private utilidades: UtilidadesTelaComponent
  ) {
    produtoStorage.ler()
      .then(
        (produtos) => {
          this.produtos = produtos
          utilidades.apresentarMensagem(`${this.produtos.length} produto(s) foram carregados.`)
        }
      );
  }

  public tratarBusca(event: any) {
    if (event.event.target.value.length > 0) {

    }
  }

  async adicionarProduto() {
    let produto: any = null;
    const janelaModal = await this.modalCtrl.create({
      component: ProdutoDadosPage,
      componentProps: produto
    });
    janelaModal.present();

    const { data, role } = await janelaModal.onWillDismiss();

    if (role === 'confirmar') {
      this.produtos.push(data)
      this.produtoStorage.gravar(this.produtos)
        .then(
          () => {
            this.utilidades.apresentarMensagem("Produto Cadastrado.")
          }
        )
        .catch(
          () => {
            this.utilidades.apresentarMensagem("Erro ao cadastrar o produto.")
          }
        )
    }
  }

  public excluirProduto(posicao: number) {
    this.utilidades.apresentarAlerta("Exclusão de produtos", "Confirma a exclusão?")
      .then(
        (resposta) => {
          console.log(resposta)
          if (resposta.role == "Sim") {
            this.produtos.splice(posicao, 1)
            this.produtoStorage.gravar(this.produtos)
              .then(
                () => {
                  this.utilidades.apresentarMensagem("Produto Excluído.")
                }
              )
              .catch(
                () => {
                  this.utilidades.apresentarMensagem("Erro ao excluir o produto.")
                }
              )
          }
        }
      )

  }

  public async editarProduto(posicao: number) {
    const janelaModal = await this.modalCtrl.create({
      component: ProdutoDadosPage,
      componentProps: this.produtos[posicao]
    });
    janelaModal.present();

    const { data, role } = await janelaModal.onWillDismiss();

    if (role === 'confirmar') {
      this.produtos[posicao] = data
      this.produtoStorage.gravar(this.produtos)
        .then(
          () => {
            this.utilidades.apresentarMensagem("Produto atualizado.")
          }
        )
        .catch(
          () => {
            this.utilidades.apresentarMensagem("Erro ao atualizar o produto.")
          }
        )
    }
  }

}
