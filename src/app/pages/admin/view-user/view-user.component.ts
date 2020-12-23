import { Component, OnInit } from '@angular/core';
import { Party } from 'app/@core/models/party';
import { User, userdata } from 'app/@core/models/userlogin';
import { HttpService } from 'app/@core/service/http.service';
import { UiService } from 'app/@core/service/ui.service';
import { type } from 'os';

@Component({
  selector: 'ngx-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user:Party;

  constructor(public httpservice:HttpService, private uiservice:UiService) { }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      hide:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true
    },
    delete: {
      deleteButtonContent: '<i class="nb-close"></i>',
      confirmDelete: true,
    },
    columns: {
      partyId: {
        title: 'ID',
        type: 'number',
      },
      partyName: {
        title: 'Full Name',
        type: 'string',
      },
      partyType:
      {
        title:'Party Type',
        type:'string'
      },
      subcity:
      {
        title:"Subcity",
        type:'string'
      },
      address:
      {
        title:"Address",
        type:'string'
      },
      phoneNumber:{
        title:'Phone.No',
        type:'int'
      },
      workingStation:{
        title: 'Working Station',
        type:'string'
      },
      partyStatus:{
        title:'User Status',
        type:'string'
      }

    },
  };


  ngOnInit(): void {
    this.loaddata();
  }
  loaddata()
  {
    this.httpservice.getregisteredusers().subscribe(res=>{
      this.user = res;

    })
  }
  delete(event)
  {
    if(window.confirm("Are you sure you want to disable users")){
      console.log("work")
      this.httpservice.disableuser(event.data.partyId,"PARTY_DISABLED").subscribe(res=>{
          if(res==null)
          {
            this.uiservice.showToast("success","User","Disabled");
          }
          else
          {
            this.uiservice.showToast("danger","error"," ");
          }
      });
      this.loaddata();

    }
    else
    {
      event.confirm.reject()
    }
  }
  edit(event)
  {

   if(window.confirm("Are you sure you want to enable user"))
   {
     console.log(event);

    this.httpservice.disableuser(event.data.partyId,"PARTY_ENABLED").subscribe(res=>{
      console.log(res);
      if(res==null)
      {
        this.uiservice.showToast("success","User","Enabled");
      }
      else
      {
        this.uiservice.showToast("danger","User","error");
      }
    })
    this.ngOnInit();
   }
  }

}
