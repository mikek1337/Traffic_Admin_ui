import { Component, OnInit } from '@angular/core';
import {HttpService} from 'app/@core/service/http.service';
import { incident } from 'app/@core/models/incident';

@Component({
  selector: 'ngx-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor(private httpservice:HttpService) { }
incidents:incident;
displayedColumns:string[] = ['Id','Incident Date','Reported Time','incident level','Address','Subcity','Commuter Involve','Cause','Road Alignment','Road Geometry Type','Map Information','Vehicles Involve','Party Id','Road Separation','Road Surface Condition','Road Surface Type']
  ngOnInit(): void {
  	this.httpservice.getincident(1,"null").subscribe(res=>{
      this.incidents = res; 
      console.log(this.incidents.roadAlignment);
  });
}
}
