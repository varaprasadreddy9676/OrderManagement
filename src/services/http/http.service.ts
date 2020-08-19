import { environment } from './../../environments/environment';
import { UtilityService } from './../utility/utility.service';
import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';


import { __await } from 'tslib';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService,
    private storageService: StorageService,
    // private nativeHTTP: HTTP,
    private platform: Platform,
    private router: Router
  ) { }

  rootURL = environment.BASE_URL;

  private getHeader() {

    const user: any = this.storageService.get('user');

    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (user ? user.token : '')
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      // Accept: 'application/json'
    };

  }

  private getHeaderOptions() {
    const header: any = this.getHeader();
    return {
      headers: new HttpHeaders(header)
    };
  }

  public async get(actionURL: string) {

    const serverURL = this.rootURL + actionURL;

    return await this.httpClient.get(serverURL, this.getHeaderOptions())
      .toPromise().then((data) => {
        console.log('Sync URL', serverURL);
        console.log('Sync Response', data);
        console.log('-----------------------------------------------------------');
        return data;
        // persistance logic
      },
        error => {
          console.log('Sync Error', error);
          if (error.status === 0) {

            throw new Error('Server not accessible.');
          } else if (error.error.code === 'TOKEN_EXPIRED') {

            this.router.navigate(['sign-in']);
          } else {

            if (error.error) {
              error.message = error.error.message;
            }
            throw error;
          }

          return null;
        }
      );

  }

  public async post(actionURL: string, body: any) {

    const serverURL = this.rootURL + actionURL;

    return this.httpClient.post(serverURL, body, this.getHeaderOptions())
      .toPromise().then((data) => {
        // data = data.trim();
        console.log('Sync URL', serverURL);
        console.log('Sync Response', data);
        console.log('-----------------------------------------------------------');
        return data;
      },
        error => {
          console.log('Sync Error', error);

          if (error.status === 0) {
            throw new Error('Server not accessible.');
          } else if (error.error.code === 'TOKEN_EXPIRED') {

            this.router.navigate(['sign-in']);
          } else {
            if (error.error) {
              error.message = error.error.message;
            }
            throw error;
          }

          return null;
        }
      );

  }

  public async put(actionURL: string, body: any) {

    const serverURL = this.rootURL + actionURL;

    return this.httpClient.put(serverURL, body, this.getHeaderOptions())
      .toPromise().then((data) => {
        // data = data.trim();
        console.log('Sync URL', serverURL);
        console.log('Sync Response', data);
        console.log('-----------------------------------------------------------');
        return data;
      },
        error => {
          console.log('Sync Error', error);
          if (error.status === 0) {
            throw new Error('Server not accessible.');
          } else if (error.error.code === 'TOKEN_EXPIRED') {

            this.router.navigate(['sign-in']);
          } else {
            if (error.error) {
              error.message = error.error.message;
            }
            throw error;
          }

          return null;
        }
      );

  }

  public async delete(actionURL: string) {

    const serverURL = this.rootURL + actionURL;

    return await this.httpClient.delete(serverURL, this.getHeaderOptions())
      .toPromise().then((data) => {
        console.log('Sync URL', serverURL);
        console.log('Sync Response', data);
        console.log('-----------------------------------------------------------');
        return data;
        // persistance logic
      },
        error => {
          console.log('Sync Error', error);
          if (error.status === 0) {
            throw new Error('Server not accessible.');
          } else if (error.error.code === 'TOKEN_EXPIRED') {

            this.router.navigate(['sign-in']);
          } else {
            if (error.error) {
              error.message = error.error.message;
            }
            throw error;
          }

          return null;
        }
      );

  }

}
