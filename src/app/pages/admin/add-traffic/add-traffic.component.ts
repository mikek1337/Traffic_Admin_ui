import { Component, OnInit } from '@angular/core';
import { Enums } from 'app/@core/models/incident';
import { PartyType } from 'app/@core/models/party';
import { User, Userinfo } from 'app/@core/models/userlogin';
import { HttpService } from 'app/@core/service/http.service';
import { UiService } from 'app/@core/service/ui.service';

@Component({
  selector: 'ngx-add-traffic',
  templateUrl: './add-traffic.component.html',
  styleUrls: ['./add-traffic.component.scss']
})
export class AddTrafficComponent implements OnInit {
partyTypes:PartyType;
user = new User();
enums:Enums;
TrafficId:any;
fName:string;
lName:string;
phoneno:string;
working:string;
party:string;
subcity:string;
keb:string;
wereda:string;
username:string;
password:string;
address:string;
  constructor(private httpservice:HttpService,private toastrService:UiService) { }

  ngOnInit(): void {
    this.httpservice.GetPartyType().subscribe(response=>{
      this.partyTypes=response;
      console.log(this.partyTypes[0].partyTypeId);
    });
    this.httpservice.GetEnums("SUBCITY").subscribe(response=>{
     this.enums = response; 
    })
  }
  createTraffic()
  {
    
    //this.user.user.partyId=this.TrafficId;
    this.user.party.partyName = this.fName + " "+ this.lName;
    this.user.party.partyType = this.party;
    this.user.party.phoneNumber = this.phoneno;
    this.user.party.subcity = this.subcity;
    this.user.party.address = this.subcity+" "+this.keb+" "+this.wereda;
    this.user.party.workingStation = this.working;
    this.user.party.partyStatus="PARTY_ENABLED";
    this.user.username=this.username;
    this.user.password= this.password;
    this.httpservice.registerTraffic(this.user).subscribe(res=>{
     if(res!=null)
     {
      this.toastrService.showToast("success",this.party.replace("_"," "),"Successfully Added");
     }
      
    })

  }

}
