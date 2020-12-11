import { Component, OnInit } from '@angular/core';
import { InformIncident } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private httpservice:HttpService) { }
incidents:InformIncident;
date:any;
getdate = new Date();
time:any;
incidenttype:any;
  ngOnInit(): void {
    this.httpservice.getinformedincidents().subscribe(res=>{
      this.incidents=res;
     console.log(this.incidents[0].infromIncidentId);
      this.date = this.getdate.toLocaleTimeString();
    })
  }

}
