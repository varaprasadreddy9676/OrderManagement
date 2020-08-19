import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { HttpService } from 'src/services/http/http.service';

import { Router } from '@angular/router';
import { UtilityService } from 'src/services/utility/utility.service';
import { DateService } from 'src/services/date/date.service';
import { StorageService } from 'src/services/storage/storage.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  supplierDetails: any;
  name: string;
  phone: string;
  email: string;
  address: string;

  constructor(
    private platform: Platform,
    private httpService: HttpService,
    private navCtrl: NavController,
    public dialog: MatDialog,
    private router: Router,
    private utilityService: UtilityService,
    private dateService: DateService,
    private storageService: StorageService,

  ) { }
  ionViewWillEnter() {

    this.supplierDetails = this.storageService.get('supplier');
    console.log(this.supplierDetails);
    this.name = this.supplierDetails.name;
    this.phone = this.supplierDetails.phone;
    this.email = this.supplierDetails.email;
    this.address = this.supplierDetails.city.city;
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      if (this.router.url === '/profile') {
        this.router.navigate(['home']);
      }
    });
  }

  validateUser() {

    const emailRegex = /^([a-zA_Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const nameRegex = /^([A-Za-z ]{1,60})?$/;

    if (!this.name) {
      this.utilityService.presentAlert('name is mandatory', 'Enter your first name.');
      return;
    }

    if (!nameRegex.test(this.name)) {
      this.utilityService.presentAlert('Invalid first name', 'name can contain alphabets only.');
      return;
    }


    if (this.email && !emailRegex.test(this.email.toLowerCase())) {
      this.utilityService.presentAlert('Invalid email', 'Please enter a valid email.');
      return;
    }

    if (!this.phone) {
      this.utilityService.presentAlert('Invalid phone number', 'Please enter your phone number.');
      return;
    }

    if (!(this.phone.toString().length === 10)) {
      this.utilityService.presentAlert('Invalid phone number', 'Enter a valid phone number.');
      return;
    }

    // this.editProfile();

  }
  validateName(event) {
    if (!(event.key && event.key.match('[A-Za-z ]'))) {
      this.name = this.name.substr(0, this.name.length - 1);
    }
  }
  numberValidate(event) {
    if (!(event.key && event.key.match('[0-9]'))) {
      this.phone = this.phone.substr(0, this.phone.length - 1);
    }
  }
  updateUser(supplier) {
    this.storageService.set('supplier', supplier, true);
  }


  ngOnInit() {
    // this.supplierDetails = this.storageService.get('supplier');
    // console.log(this.supplierDetails);

  }


}
