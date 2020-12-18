import { Component, OnInit } from '@angular/core';
import { InformIncident,Enums } from 'app/@core/models/incident';

import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  test: any;
  enumdescription: string[]=[];

  constructor(private httpservice:HttpService) { }
incidents:InformIncident;
date:any;
getdate = new Date();
time:any;
empty:boolean=false;
incidenttype:any;
  ngOnInit(): void {
    this.httpservice.getinformedincidents().subscribe(res=>{
      this.incidents=res;
      if(Object.keys(this.incidents).length==0)
      {
        this.empty = true;
      }
    // console.log(this.incidents[0].infromIncidentId);
     console.log(this.enumdescription);
      this.date = this.getdate.toLocaleTimeString();
    })

  }

}
