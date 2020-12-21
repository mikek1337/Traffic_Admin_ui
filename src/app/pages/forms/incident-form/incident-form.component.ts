import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enums,incident } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';
import { StorageService } from 'app/@core/service/storage.service';
import { UiService } from 'app/@core/service/ui.service';

@Component({
  selector: 'ngx-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent implements OnInit {
  roadseparations: Enums;
  roadalis: Enums;
  partyid: string;



  constructor(private route:Router,private router:ActivatedRoute,private http:HttpService,private storage:StorageService,private uiservice:UiService) { }
havenext:string[]=["ህዝባዊ በዓላት","በግንባታ ምክንያት","የመንገድ ስራ","መሰረተ ልማት","መጥፎ የአየር ሁኔታ","የትራፊክ መብራት መበላሸት"]
showbutton:boolean=true;
incidentname:string;
urlinfo:any;
incidentnameid: any;
subcities:Enums;
roadtype:Enums;
geomerties: Enums;
date = new Date();
incidentdata= new incident() 
  ngOnInit(): void {
    this.router.params.subscribe(i=>{
      console.log(i.id)
      this.urlinfo = i.id.split(",");
      this.incidentname = this.urlinfo[0];
      this.incidentnameid = this.urlinfo[1];
    })
    this.havenext.forEach(element => {
       // console.log(element)
       // console.log(this.incidentname)
        if(element===this.incidentname)
        {
          this.showbutton=false;
          console.log(this.showbutton)
        }
        
      });
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
    this.partyid=this.storage.getLocalStorage("partyid")

  }
  nextpage()
  {
    this.incidentdata.partyId = this.partyid;
    this.incidentdata.incidentDate = this.incidentdata.initialReportedTime;
    this.http.addincident(this.incidentdata).subscribe(res=>{
      if(res!=null)
      {
        console.log(res);
        this.route.navigateByUrl('pages/forms/driver/'+res);
      }
    })  
    
  }
  save()
  {
    console.log(this.incidentdata);
    this.incidentdata.partyId = this.partyid;
    this.incidentdata.incidentDate = this.incidentdata.initialReportedTime;
    this.http.addincident(this.incidentdata).subscribe(res=>{
      if(res==null)
      {
        this.uiservice.showToast("primary","Repoted Successful","");
      }
    })    
  }

}
