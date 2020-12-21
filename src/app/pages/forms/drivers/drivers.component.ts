import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from 'app/@core/service/http.service';
import {StorageService} from 'app/@core/service/storage.service';
import {UiService} from 'app/@core/service/ui.service';
import { Enums, driver } from 'app/@core/models/incident';
@Component({
  selector: 'ngx-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private route:Router,private http:HttpService,private router:ActivatedRoute,private storage:StorageService,private uiservice:UiService) { }
  driverlicenses:Enums
  subcitys:Enums
  noofdriver:any;
  driversprocessed:any=1;
  driverrelations:Enums;
  driverxps:Enums;
  drivereds:Enums;
  btnname:string = "ቀጣይ ግጽ";
  write:boolean=false;
  driver=new driver();
  ngOnInit(): void {
    this.http.GetEnums("DRIVER'S_LICENCE LEVEL").subscribe(res=>{
      this.driverlicenses = res;
    })

    this.http.GetEnums("SUBCITY").subscribe(res=>{
      this.subcitys = res;
    })
    this.http.GetEnums("DRIVER-VEHICLE_RELATIONSHIP").subscribe(res=>{
      this.driverrelations = res;
    })

    this.http.GetEnums("DRIVER'S_DRIVING_EXPERIENCE").subscribe(res=>{
      this.driverxps = res;
    })

    this.http.GetEnums("DRIVER_EDUCTION_LEVEL").subscribe(res=>{
      this.drivereds = res;
    })
    this.data();

  }
  previouspage()
  {
    this.route.navigateByUrl("pages/forms/incidentForm");
  }
  nextpage()
  {
    this.data();
    if (this.noofdriver>this.driversprocessed) {
      console.log(this.driver);
      this.write = true;
      this.http.adddriver(this.driver).subscribe(res=>{
        if(res==null)
        {
          console.log("sent")
          this.driver = new driver();
          this.driversprocessed++;
        }
      })  
    }
    else
    {
      console.log(this.driver);
     this.http.adddriver(this.driver).subscribe(res=>{
        if(res==null)
        {
          this.uiservice.showToast("success","Drivers added","");
          console.log("sent")
          this.route.navigateByUrl("pages/forms/incidentCase");
          //this.driver = new driver();
          //this.driversprocessed++;
        }
      })
     
    }
    
    //
  }

  data()
  {
    this.router.params.subscribe(res=>{
      this.driver.incidentId = res.id;
    })
    this.driver.partyId = this.storage.getLocalStorage("partyid")
  }
  changebtname()
  {
    if(this.noofdriver == 1)
    {
      this.btnname = "ቀጣይ ግጽ";
    }
    else
    {
      this.btnname = "አስቀምጥ";
    }
    
  }

}
