import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutoStorageService } from 'src/app/storage/produto.storage.service';
import { UtilidadesTelaComponent } from 'src/app/util/utilidades-tela/utilidades-tela.component';

@Component({
  selector: 'app-produto-dados',
  templateUrl: './produto-dados.page.html',
  styleUrls: ['./produto-dados.page.scss'],
})
export class ProdutoDadosPage implements OnInit {

  public produto: any;
  public codigo: number = 0;
  public nome: string = "";
  public quantidade: number = 0;
  public preco: number = 0.00;

  constructor(
    private modalCtrl: ModalController,
    private utilidades: UtilidadesTelaComponent
  ) {
    if (this.produto != null)
        this.setProduto()
  }

  public setProduto()
  {
    this.codigo = this.produto.codigo;
    this.nome = this.produto.nome;
    this.quantidade = this.produto.quantidade,
    this.preco = this.produto.preco
  }

  public cancelar() {
    return this.modalCtrl.dismiss(null, 'cancelar');
  }

  public confirmar() {
    let produto = {
        codigo: this.codigo,
        nome: this.nome,
        quantidade: this.quantidade,
        preco: this.preco
    }
    return this.modalCtrl.dismiss(produto, 'confirmar');
  }

  ngOnInit() {
  }


}
