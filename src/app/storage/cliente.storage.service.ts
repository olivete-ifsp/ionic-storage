import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ClienteStorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  public async gravar(clientes : any[])
  {
      this.storage.set("CLIENTES", clientes);
  }

  public async ler(): Promise<any[]> {
    const values = await this.storage.get("CLIENTES");
    //Verifica se existem valores armazenados.
    if (values) {
      return  values;
    } else {
      return [];
    }
  }
}
