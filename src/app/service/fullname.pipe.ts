import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact.model';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: Contact): any {
    return contact.title+" "+contact.firstName+" "+contact.surname;
  }

}
