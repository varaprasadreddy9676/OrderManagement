import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  playerId: string;
  showSpinner = false;
  appHashCode = '';

  constructor(
    private alertController: AlertController,
    public toastController: ToastController
  ) {
    // this.getAppHashCode();
  }

  async presentToast(toastMessage, toastDuration) {

    const toast = await this.toastController.create({
      message: toastMessage,
      duration: toastDuration
    });

    toast.present();

  }


  toISODateTime(date: Date): string {
    // return date.toISOString();
    const isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    return isoDate;
  }


  toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  dateFormat(date: Date): string {
    let day: string = (date.getDate() + 1).toString();
    day = +day < 10 ? '0' + day : day;
    let month: string = (date.getMonth() + 1).toString();
    month = +month < 10 ? '0' + month : month;
    const year = date.getFullYear().toString();
    const time = date.toLocaleTimeString();
    return day + '/' + month + '/' + year;
  }

  async presentAlert(subheader: string, message: string) {
    const alert = await this.alertController.create({
      header: subheader,
      // tslint:disable-next-line: object-literal-shorthand
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
