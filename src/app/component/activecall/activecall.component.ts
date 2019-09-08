import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallService } from 'src/app/service/call.service';
import { Call } from 'src/app/model/call.model';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'app-activecall',
  templateUrl: './activecall.component.html',
  styleUrls: ['./activecall.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivecallComponent implements OnInit {

  public contact : Contact;
  public contactForm : Contact;
  
  constructor(private activeRoute:ActivatedRoute, private callService : CallService, private router : Router) { }

  ngOnInit() {
    console.log("id "+this.activeRoute.snapshot.params.id);
    this.contact = this.callService.getContactByCallId(this.activeRoute.snapshot.params.id);
    console.log(this.contact);
    this.contactForm = Object.assign({}, this.contact);
  }

  update() {
    console.log("Update: "+this.contactForm.id);
    this.callService.updateContact(this.contactForm);
  }

  reset() {
    this.contactForm = Object.assign({}, this.contact);
  }

  complete() {
    this.router.navigate(['/calls']);
  }
}
