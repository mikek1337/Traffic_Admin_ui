import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Userinfo } from 'app/@core/models/userlogin';
import { HttpService } from 'app/@core/service/http.service';
import { StorageService } from 'app/@core/service/storage.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpservice:HttpService,private router:Router,private storage:StorageService) { }
username:string;
password:string;
usernameempty = false;
passwordempty=false;
success:boolean;
unsuccess:boolean;
userinfos:Userinfo;
login()
{
  if(this.username == undefined)
  {
    this.usernameempty = true;
  }
  else if(this.password == undefined)
  {
    this.passwordempty = true
    this.usernameempty = false;
  }
  else
  {
  this.httpservice.Authenticate(this.username,this.password).subscribe(Response=>
    {
          this.userinfos = Response;
          if(this.userinfos.user.party.partyType == "ADMINSTRATOR" || this.userinfos.user.party.partyType == "TRAFFIC_POLICE" || this.userinfos.user.party.partyId=="SYSTEM_USER" || this.userinfos.user.party.partyId=="INVESTGATOR_TRAFFIC_POLICE"){
          this.storage.setLocalStrorage(this.userinfos);
          console.log(this.userinfos);
          this.unsuccess = false;
          this.router.navigateByUrl("pages/dashboard");
          this.success = true;
          }
          else{
            this.unsuccess = true;
          }


    }
    )
  }
}
  ngOnInit(): void {
  }

}
