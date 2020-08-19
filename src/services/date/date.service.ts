import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  to12HourFormat(time): string {

    try {

      const min = time.split(':');
      let hours = parseFloat(time);
      let suffix;

      suffix = (hours >= 12) ? ' PM' : ' AM';
      hours = ((hours + 11) % 12 + 1);
      time = hours + ':' + min[1] + suffix;

      return time;
    } catch (e) {

      return time;
    }
  }

  toDBdateFormat(date: Date): string {
    try {

      let day: string = (date.getDate()).toString();
      day = +day < 10 ? '0' + day : day;
      let month: string = (date.getMonth() + 1).toString();
      month = +month < 10 ? '0' + month : month;

      const year = date.getFullYear().toString();
      const time = date.toLocaleTimeString();
      return day + '/' + month + '/' + year;

    } catch (e) {
      return date + '';
    }
  }

  dateStringToDate(dt: any): any {
    try {

      const dateArray = dt.split('/');
      const dateString = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
      console.log('DateString', dateString);
      const date = new Date(dateString);
      console.log('Date', date);
      return date;

    } catch (e) {
      return dt;
    }
  }
}
