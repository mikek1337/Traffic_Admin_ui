import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { incident } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'ngx-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.scss']
})
export class ViewRecordsComponent implements OnInit {
incidents:incident;
tempins:incident[];
page = 1;
  pageSize = 4;
  collectionSize;
  countries: incident[];
filter = new FormControl('');
  constructor(private httpservice:HttpService) {
    //this.refreshCountries();
   }
  displayedColumns:string[] = ['Id','Incident Date','Reported Time','incident level','Address','Subcity','Commuter Involve','Cause','Road Alignment','Road Geometry Type','Map Information','Vehicles Involve','Party Id','Road Separation','Road Surface Condition','Road Surface Type']
  ngOnInit(): void {
    this.httpservice.getincident().subscribe(res=>{
      this.incidents = res; 
      console.log(this.incidents.roadAlignment);
      this.tempins.push(this.incidents);   
    })
  }
  refreshCountries() {
    this.countries = this.tempins
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  

}
