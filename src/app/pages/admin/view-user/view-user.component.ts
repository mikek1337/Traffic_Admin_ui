import { Component, OnInit } from '@angular/core';
import { Party } from 'app/@core/models/party';
import { User, userdata } from 'app/@core/models/userlogin';
import { HttpService } from 'app/@core/service/http.service';
import { type } from 'os';

@Component({
  selector: 'ngx-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user:Party;

  constructor(public httpservice:HttpService) { }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
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
    this.httpservice.getregisteredusers().subscribe(res=>{
      this.user = res;
      
    })
  }
  delete(event)
  {
    if(window.confirm("Are you sure you want to delete")){
      console.log("work")
       
    }
    else
    {
      event.confirm.reject()
    }
  }
  edit(event)
  {
    event;
    window.confirm("Are u sure");
  }
  
}
