import { Component, OnInit } from '@angular/core';
import { Enums } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-victims',
  templateUrl: './victims.component.html',
  styleUrls: ['./victims.component.scss']
})
export class VictimsComponent implements OnInit {
  victimHealth: Enums;
  victimManeuver: Enums;
  victimProfession: Enums;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
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

}
