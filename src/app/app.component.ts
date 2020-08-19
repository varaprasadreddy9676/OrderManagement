
import { StorageService } from './../services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { UtilityService } from 'src/services/utility/utility.service';
import { HttpService } from 'src/services/http/http.service';
import { AppVersion } from '@ionic-native/app-version/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent implements OnInit {

  public appPages;
   appVersionNo;
  isPlatformBrowser = false;
  isAdminUser = false;
  isRootUser = false;

  constructor(
    private appVersion: AppVersion,
    private storageService: StorageService,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private utilityService: UtilityService,
    private httpService: HttpService,
    private fcm: FCM
  )
  {

    console.log('All platforms', platform.platforms());
    if (this.platform.is('desktop')) {
      this.isPlatformBrowser = true;
    } else {
      this.isPlatformBrowser = false;
    }

    console.log('Platform browser : ', this.isPlatformBrowser);
    // this.initializeApp();

    this.appPages = [
      {
        title : 'Home',
        url   : '/home',
        icon  : 'home'
      },
      {
        title : 'Profile',
        url   : '/profile',
        icon  : 'person-circle-outline'
      },
    ];
    this.initializeApp();

  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.appVersion.getVersionNumber().then(value => {
        this.appVersionNo = value;
      }).catch(err => {
        console.log(err);
      });

      this.statusBar.styleLightContent();

      this.splashScreen.hide();
      // timer(3000).subscribe(() => this.showSplash = false );
      if (this.platform.is('cordova')) {
        this.autoLogin();
        this.fcmcall();

      }
    });

  }
 async fcmcall(){
   // push notifications
   this.fcm.getToken().then(token => {
    console.log(token);
  });
   this.fcm.onTokenRefresh().subscribe(token => {
    console.log(token);
  });
   this.fcm.onNotification().subscribe(data => {
    console.log(data);
    alert(data);
    if (data.wasTapped) {
      console.log('Received in background');
      this.router.navigate(['/purchase-orders']);
    } else {
      console.log('Received in foreground');
      this.router.navigate(['/purchase-orders']);
    }
  });
 }

  async appReboot() {
    const url = '/app/reboot';

    await this.httpService.get(url)
      .then((response) => {
        this.utilityService.presentAlert('Rebooting', response.message);
      })
      .catch((error) => {
        console.log('Error', error);
        this.utilityService.presentAlert('Error!', error.message);
      });
  }

  signOut() {
    this.storageService.clearStorage();
    this.router.navigate(['login']);
  }



  async autoLogin() {

    await this.storageService.getStoredData()
      .then(data => {
        const user = this.storageService.get('user');
        if (user.token) {
          this.router.navigate(['home']);
        }
      })
      .catch(error => { });

  }



  ngOnInit() {

  }

}
