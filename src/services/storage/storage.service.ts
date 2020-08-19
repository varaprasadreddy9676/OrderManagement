import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private storageMap = new Map<string, any>();

  constructor(private storage: Storage) {

    // const _storageMap = new Map<string, any>();
    // // get all the keys and put into storageMap
    // this.storage.forEach(function (value, key, iterationNumber) {
    //   console.log(key);

    //   try {
    //     _storageMap.set(key, value);
    //   } catch (e) {
    //     console.error(e);
    //   }

    //   console.log('.. Added');
    // }).then(() => {
    //   this.storageMap = _storageMap;
    // });

    this.getStoredData();
  }

  public get(key: string) {
    return this.storageMap.get(key);
  }

  public set(key: string, value: any, toLocalStore: boolean) {

    if (toLocalStore) {
      this.storage.set(key, value);
    }

    this.storageMap.set(key, value);

  }

  public remove(key: string) {
    this.storage.remove(key);
    this.storageMap.set(key, null);
  }

  public clearStorage() { // Call this on sign out
    this.storage.clear();
    this.storageMap.clear();
    console.log('Storage Cleared');
  }

  async getStoredData() {

    const _storageMap = new Map<string, any>();
    // get all the keys and put into storageMap
    await this.storage.forEach(function (value, key, iterationNumber) {
      console.log(key);

      try {
        _storageMap.set(key, value);
      } catch (e) {
        console.error(e);
      }

      console.log('.. Added');
    }).then(() => {
      this.storageMap = _storageMap;
    });

  }

}
