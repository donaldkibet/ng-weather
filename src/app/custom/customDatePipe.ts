import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/core';

@Pipe({name : 'dateformat'})
export class customDatePipe extends DatePipe implements DatePipe {
    //  Convert the passed value to a date into 24 Hours format
    transform(value: any): any {
        return super.transform(value, "H");
    }
}

export class DateFormat  extends DatePipe implements DatePipe{
    transform(value:any):any{
        return super.transform(value,'yyyy-MM-dd');
    }
}
export class DayFormat  extends DatePipe implements DatePipe{
    transform(value:any):any{
        return super.transform(value,'EEEE');
    }
}

