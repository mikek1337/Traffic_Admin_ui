import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { HttpService } from 'app/@core/service/http.service';
import { StorageService } from 'app/@core/service/storage.service';
import { UiService } from 'app/@core/service/ui.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(protected ref: NbDialogRef<LogoutComponent>,private http:HttpService,private storage:StorageService,private router:Router) { }
id:any
  ngOnInit(): void {
    this.id=this.storage.getLocalStorage("userid");
  }
 submit()
 {
  this.http.logout(this.id).subscribe(res=>{
    if(res == null)
    {
      this.storage.clearLocalStorage();
      this.router.navigateByUrl("auth");
    }
    
  })
  this.ref.close()
 }
 cancel()
 {
   this.ref.close();
 }
}
