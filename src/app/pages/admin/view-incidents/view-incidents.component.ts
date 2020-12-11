import { Component, OnInit } from '@angular/core';
import { InformIncident } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-view-incidents',
  templateUrl: './view-incidents.component.html',
  styleUrls: ['./view-incidents.component.scss']
})
export class ViewIncidentsComponent implements OnInit {

  constructor(private http:HttpService) { }
incidents:InformIncident;
  ngOnInit(): void {
  this.http.getinformedincidents().subscribe(res=>{
    this.incidents = res;
  });
  }

}
