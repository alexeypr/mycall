import { Injectable } from '@angular/core';
import { NgbModule, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePicker } from '../model/datepicker.model';

@Injectable()
export class DformatterService extends NgbDateParserFormatter {

  parse(value: string): NgbDateStruct {
    if (value=='') return null;
    let parts = value.split('/')
    let datePicker = new DatePicker();
    datePicker.day = parseInt(parts[0]);
    datePicker.month = parseInt(parts[1]);
    datePicker.year = parseInt(parts[2]);
  }
  format(date: NgbDateStruct): string {
    if (date==null) return '';
    return date.day.toString().padStart(2,"0")
            +"/"+date.month.toString().padStart(2,"0")
            +"/"+date.year.toString().padStart(2,"0");
  }

}
