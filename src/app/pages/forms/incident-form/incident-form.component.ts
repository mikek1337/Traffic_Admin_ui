import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enums } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent implements OnInit {
  roadseparations: Enums;
  roadalis: Enums;



  constructor(private route:Router,private router:ActivatedRoute,private http:HttpService) { }
havenext:string[]=["ህዝባዊ በዓላት","በግንባታ ምክንያት","የመንገድ ስራ","መሰረተ ልማት","መጥፎ የአየር ሁኔታ","የትራፊክ መብራት መበላሸት"]
button:boolean=true;
incidentname:string;
urlinfo:any;
incidentnameid: any;
subcities:Enums;
geomerties: Enums;
  ngOnInit(): void {
    this.router.params.subscribe(i=>{
      console.log(i.id)
      this.urlinfo = i.id.split(",");
      this.incidentname = this.urlinfo[0];
      this.incidentnameid = this.urlinfo[1];
      this.havenext.forEach(element => {
        if(element==i.id)
        {
          this.button=false;
        }
      });
    })
    this.http.GetEnums("SUBCITY").subscribe(res=>{
      this.subcities = res;
    })
    this.http.GetEnums("ROAD_GEOMETERY_TYPE").subscribe(res=>{
      this.geomerties=res
    })

    this.http.GetEnums("ROAD_SEPARATION").subscribe(res=>{
      this.roadseparations = res
    })
    this.http.GetEnums("ROAD_ALIGNMENT").subscribe(res=>{
      this.roadalis = res
    })
  }
  nextpage()
  {
    this.route.navigateByUrl("pages/forms/driver");
  }


}
