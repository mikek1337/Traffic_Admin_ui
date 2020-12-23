import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enums, victim } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';
import { UiService } from 'app/@core/service/ui.service';

@Component({
  selector: 'ngx-victims',
  templateUrl: './victims.component.html',
  styleUrls: ['./victims.component.scss']
})
export class VictimsComponent implements OnInit {
  victimHealth: Enums;
  victimManeuver: Enums;
  victimProfession: Enums;
  victim:victim=new victim;
  victimcount:any;
  victimprocessed: any=1;
  set:boolean=false;
  incidentid: any;
  constructor(private http:HttpService,private router:ActivatedRoute,private uiservice:UiService,private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(param=>{
      this.incidentid = param.incidentid
    })
    this.http.GetEnums("VICTIM_HEALTH_STATUS").subscribe(res=>{
      this.victimHealth = res;
    })

    this.http.GetEnums("VICTIM_MANEUVER").subscribe(res=>{
      this.victimManeuver = res;
    })
    this.http.GetEnums("VICTIM_PROFESSION").subscribe(res=>{
      this.victimProfession = res;
    })
  }
register()
{
  this.set=true;
  this.victim.incidentId = this.incidentid;
  if (this.victimcount>this.victimprocessed) {
      this.http.addvictim(this.victim).subscribe(res=>{console.log(res)})
      this.victimprocessed++;
      this.victim = new victim();
  }
  else
  {
    console.log("wo");
    this.http.addvictim(this.victim).subscribe(res=>{
      if(res==null)
      {
        this.uiservice.showToast("success","Record Added","Successfull");
        this.route.navigateByUrl('pages/forms/inputs');
      }
    })
  }
}
}
