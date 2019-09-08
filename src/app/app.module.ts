import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { CallsComponent } from './component/calls/calls.component';
import { ActivecallComponent } from './component/activecall/activecall.component';
import { FormsModule } from '@angular/forms'; 
import { NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DformatterService } from './service/dformatter.service';
import { FullnamePipe } from './service/fullname.pipe';

const routes : Routes = [
  {path : 'calls', component : CallsComponent},
  {path : 'activecall/:id', component : ActivecallComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CallsComponent,
    ActivecallComponent,
    FullnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass : DformatterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
