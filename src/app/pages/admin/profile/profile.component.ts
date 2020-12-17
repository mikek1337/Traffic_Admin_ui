import { Component, OnInit } from '@angular/core';
import { Enums } from 'app/@core/models/incident';
import { User } from 'app/@core/models/userlogin';
import { HttpService } from 'app/@core/service/http.service';
import { StorageService } from 'app/@core/service/storage.service';
import { UiService } from 'app/@core/service/ui.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private httpservice:HttpService,private storage:StorageService,private uiservice:UiService) { }
 user:User;
 name:any;
 enums:Enums
 userid:any
  ngOnInit(): void {
    this.userid = this.storage.getLocalStorage("userid");
    this.httpservice.getuser(this.userid).subscribe(res=>{
      this.user = res
     
    });
    this.httpservice.GetEnums("SUBCITY").subscribe(res=>{
      this.enums = res;
    })
  }
  update()
  {
   this.httpservice.modify(this.user[0]).subscribe(res=>{
     console.log(res);
     if(res==null)
     {
        this.uiservice.showToast("success","Change Saved"," ")
     }
   })
    console.log(this.user)
  }

}
