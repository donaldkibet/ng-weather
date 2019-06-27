import { customDatePipe,DateFormat,DayFormat } from "./customDatePipe";
import  en_ke  from '@angular/common/locales/en-KE';

describe('Custom Date-Pipe test',()=>{

    let customedatepipe:customDatePipe;
    let dateformat:DateFormat;
    let dayformat:DayFormat;

    beforeEach(()=>{
        customedatepipe =  new customDatePipe(en_ke.toLocaleString());
        dateformat = new DateFormat(en_ke.toLocaleString());
        dayformat = new DayFormat(en_ke.toLocaleString());
    })

    it('should return the hour in 24 hours format from a date',()=>{
        const hour = customedatepipe.transform('Thu Jun 27 2019 22:11:40');
        expect(hour).toEqual('22');
    })

    it('should return the date in "yyyy-MM-dd" format',()=>{
        const date = dateformat.transform('Thu Jun 27 2019 22:11:40');
        expect(date).toEqual('2019-06-27');
    })

    it('should return the date as a string e.g Monday',()=>{
        const day = dayformat.transform('Thu Jun 27 2019 22:11:40');
        expect(day).toEqual('Thursday');
    })
})