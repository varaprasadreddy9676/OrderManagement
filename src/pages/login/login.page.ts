import { MenuController, Platform } from '@ionic/angular';
import { UtilityService } from './../../services/utility/utility.service';
import { HttpService } from './../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/services/storage/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  password: string;
  disableSignIn: boolean;
  token;
  features;
  supplierDetails: any;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private utilityService: UtilityService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private menuCtrl: MenuController,
    private platform: Platform
  ) {
    this.disableSignIn = false;
    this.token = this.storageService.get('token');
    this.features = this.storageService.get('features');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  getUser() {
    return { userName: this.userName, password: this.password };
  }

  ngOnInit() {
  }
  openDetailsWithState(tk, f) {
    const navigationExtras: NavigationExtras = {
      state: {
        token: tk,
        features: f

      }
    };
    this.router.navigate(['home'], navigationExtras);
  }

  async doSignIn() {

    this.disableSignIn = true;

    const payload = this.getUser();
    const url = '/signIn';

    await this.httpService.post(url, payload)
      .then((user) => {
        if (user) {
          this.storageService.set('user', user, true);
          console.log('token.........' + user.token);
          console.log('features......' + JSON.stringify(user.features));
          this.getSupplierdetails();
          this.router.navigate(['home']);
        }
      })
      .catch((error) => {
        if (error.status === 401) {
          this.utilityService.presentAlert(`Login Failed`, 'Enter valid credentials.');
        }
        this.disableSignIn = false;
        console.log('Login Error', error);
      });
  }
  async getSupplierdetails(){
    const url = '/supplier/getSupplier';
    await this.httpService.get(url)
      .then((supplier) => {
          this.supplierDetails = supplier;
          console.log('Supplier details received are: ', this.supplierDetails);
          this.storageService.set('supplier', supplier, true);
      })

      .catch((error) => {
        console.log('Error', error);
      });
  }


}

