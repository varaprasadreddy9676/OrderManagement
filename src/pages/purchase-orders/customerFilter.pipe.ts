import { PipeTransform, Pipe } from '@angular/core';
// import {  } from 'module';

@Pipe({
    name: 'customerFilter'
})
// tslint:disable-next-line:class-name
export class customerFilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {

        if (!value) {return null; }
        if (!args) {return value; }

        args = args.toLowerCase();

        // tslint:disable-next-line:only-arrow-functions
        return value.filter(function(item){
            return JSON.stringify(item.documentNumber).toLowerCase().includes(args);
        });
    }
}
