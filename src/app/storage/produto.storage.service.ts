import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ProdutoStorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  public async gravar(produtos : any[])
  {
      this.storage.set("PRODUTOS", produtos);
  }

  public async ler(): Promise<any[]> {
    const values = await this.storage.get("PRODUTOS");

    if (values) {
      return  values;
    } else {
      return [];
    }
  }
}
