import { Injectable } from '@angular/core';
import { Call } from '../model/call.model';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private calls : Call[] = [
    {
      id : 1,
      contact : {
        id : 11,
        title : "Mr",
        firstName : "Giacomo",
        surname : "Gullizani",
        mobile : "(04) 4444 4444",
        phone : "(03) 3333 3333"
      },
      dateSold : "03/05/2019",
      status : "IN USE"
    },
    {
      id : 2,
      contact : {
        id : 12,
        title : "Ms",
        firstName : "Patricia",
        surname : "Hogema",
        mobile : "(04) 4444 4444",
        phone : "(03) 3333 3333"
      },
      dateSold : "05/05/2019",
      status : "COMPLETED"
    },
    {
      id : 3,
      contact : {
        id : 13,
        title : "Miss",
        firstName : "Valery",
        surname : "Liberty",
        mobile : "(04) 4444 4444",
        phone : "(03) 3333 3333"
      },
      dateSold : "04/05/2019",
      status : "NEW"
    },
    {
      id : 4,
      contact : {
        id : 14,
        title : "Mrs",
        firstName : "Mariah",
        surname : "Maclachlan",
        mobile : "(04) 4444 4444",
        phone : "(03) 3333 3333"
      },
      dateSold : "06/05/2019",
      status : "NEW"
    }
  ]
  constructor() { console.log('service init');}

  getCalls() {
    return this.calls;
  }

  getContactByCallId(callId:number):Contact {
    return this.calls.filter(c => c.id==callId)[0].contact;
  };

  getContactById(contactId:number):Contact {
    return this.calls.filter(c => c.contact.id==contactId)[0].contact;
  };

  updateContact(contact : Contact) {
    Object.assign(this.getContactById(contact.id), contact);
  }
}
