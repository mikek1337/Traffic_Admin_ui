import { Component, OnInit } from '@angular/core';
import { Enums } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicleAge : Enums;
  vehicleManeuver : Enums;
  vehicleOwnership : Enums;
  vehicleRelatedDeficiency:Enums;
  vehicleType:Enums;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.GetEnums("VEHICLE_AGE").subscribe(res=>{
      this.vehicleAge = res;
    })

    this.http.GetEnums("VEHICLE_MANEUVER").subscribe(res=>{
      this.vehicleManeuver = res;
    })
    this.http.GetEnums("VEHICLE_OWNERSHIP").subscribe(res=>{
      this.vehicleOwnership = res;
    })

    this.http.GetEnums("VEHICLE_RELATED_DEFICIENCY").subscribe(res=>{
      this.vehicleRelatedDeficiency= res;
    })

    this.http.GetEnums("VEHICLE_TYPE").subscribe(res=>{
      this.vehicleType = res;
    })
  }

}
