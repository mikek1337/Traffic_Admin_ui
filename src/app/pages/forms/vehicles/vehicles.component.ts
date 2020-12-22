import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enums, vehicle } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicleAge : Enums;
  driverid:any[];
  vehicleManeuver : Enums;
  vehicleOwnership : Enums;
  vehicleRelatedDeficiency:Enums;
  vehicleType:Enums;
  vehicle:vehicle=new vehicle();
  noofdriver: any=1;
  incidentid: any;
  constructor(private http:HttpService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(param=>{
      this.driverid=param.driverid.split(",");
      console.log(this.driverid)
      this.incidentid=param.incidentid;
    })
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
  register()
  {
    this.vehicle.partyId=this.driverid[this.noofdriver-1];
    this.vehicle.incidentId = this.incidentid;
    if (this.noofdriver<this.driverid.length) {
      this.http.addvehicle(this.vehicle).subscribe(res=>{console.log(res)})
      this.noofdriver++;
      this.vehicle = new vehicle();
    }
    else
    {
      console.log("end");
      this.http.addvehicle(this.vehicle).subscribe(res=>{console.log(res)});
      this.route.navigateByUrl('pages/forms/victim/'+this.vehicle.incidentId);
    }   
    
  }
}
