import { Component, OnInit } from '@angular/core';
import { incident } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.scss']
})
export class ViewRecordsComponent implements OnInit {
incidents:incident;
  constructor(private httpservice:HttpService) { }
  displayedColumns:string[] = ['Incident Id','Incident Date','Initial Reported Time','Incident Address','Incident Subcity','No Of Commuter Involve','Incident Contributing Cause','Road Alignment','Road Geometry Type']
  ngOnInit(): void {
    this.httpservice.getincident().subscribe(res=>{
      this.incidents = res;
      console.log(this.incidents);
      
    })
  }

}
