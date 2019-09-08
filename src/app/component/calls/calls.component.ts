import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CallService } from 'src/app/service/call.service';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Call } from 'src/app/model/call.model';
import { SearchForm } from 'src/app/model/search-form.model';
import { DatePicker } from 'src/app/model/datepicker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CallsComponent implements OnInit {
  faCalendar = faCalendar;
  public selectedRecord : number = 0;
  public callList : Call[];
  public searchForm : SearchForm;

  constructor(private callService : CallService, private router : Router) { }

  ngOnInit() {
    this.callList = this.callService.getCalls();
    console.log(this.callList);
    this.searchForm = new SearchForm();
    this.searchForm.callType = "SALES";
  }

  selectRecord(call:any) {
    console.log("Selected "+call.id);
    this.selectedRecord = call.id;
  }

  onFormSubmit() {
    console.log(this.searchForm);
    let filteredList = this.callService.getCalls();
    if (this.searchForm.status!==undefined && this.searchForm.status!='')
      filteredList = filteredList.filter(c => c.status == this.searchForm.status);
    console.log(this.searchForm.dateSoldFrom);
    if (this.searchForm.dateSoldFrom!==undefined) {
      console.log("111 "+this.searchForm.dateSoldFrom.day);

      filteredList = filteredList.filter(c => this.compareDates(this.toStringFormat(this.searchForm.dateSoldFrom), c.dateSold));
    }
    if (this.searchForm.dateSoldTo!==undefined) {
      console.log("222 "+this.searchForm.dateSoldTo);
      filteredList = filteredList.filter(c => this.compareDates(c.dateSold, this.toStringFormat(this.searchForm.dateSoldTo)));
    }
    this.callList = filteredList;
  }

  compareDates(date1:string, date2:string) {
    console.log(date1+" "+date2);
    let parts1 = date1.split('/');
    let parts2 = date2.split('/');
    console.log("Compare "+parts1+" and "+parts2);
    return new Date(parts1[2]+"-"+parts1[1]+"-"+parts1[0]) <= new Date(parts2[2]+"-"+parts2[1]+"-"+parts2[0]);
  }

  toStringFormat(dp : DatePicker) : string {
    if (dp.day==0 || dp.month==0 || dp.year==0) return '';
    return dp.day.toString().padStart(2,"0")
        +"/"+dp.month.toString().padStart(2,"0")
        +"/"+dp.year.toString().padStart(2,"0");
  }

  makeCall() {
    this.router.navigate(['/activecall/'+this.selectedRecord]);
  }
}
