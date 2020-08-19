import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(
    private storageService: StorageService,
    private httpService: HttpService
  ) { }

  async canActivate(): Promise<boolean> {

    await this.storageService.getStoredData()
      .then(data => {
        const user = this.storageService.get('user');
        if (user.token) {

          const verifyOTPURL = '/user/verifyToken';
          this.httpService.get(verifyOTPURL)
            .then((datas) => {
              console.log('Verify token Successfully', datas);
              if (datas.data.profileId !== null) {
                return false;
              }
            })
            .catch((error) => {
              console.log('Error', error);
            });
        }
      })
      .catch(error => { });
    return true;

  }

}
