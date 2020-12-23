import { Component, OnInit } from '@angular/core';
import { damage, Enums } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss']
})
export class DamageComponent implements OnInit {
  categories:Enums;
  types: Enums;
  damaged= new damage()
  damages:damage[]=[];
  showtable:boolean = false
  constructor(private http:HttpService) { }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      add:false,
      confirmCreate:true,

    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-close"></i>',
      confirmDelete: true,
    },
    columns:{
      itemName:{
        title:'Item name',
        type:'string'
      },
      price:{
        title: 'Estimated Price',
        type:'number'
      }
    }
  }
  ngOnInit(): void {
    this.http.GetEnums("DAMAGE_CATEGORY").subscribe(res=>{
      this.categories = res
      console.log(this.categories)
    });
    this.http.GetEnums("DAMAGE_TYPE").subscribe(res=>{
      this.types = res
      console.log(this.types)
    })
  }
  save(event)
  {
  // this.damages.push(this.damaged);
   console.log(this.damaged)
   event.confirm.resolve()
  }
  change()
  {
    if(this.damaged.damageType=="PROPERTY")
    {
      this.showtable = true;
    }
    else
    {
      this.showtable = false;
    }
  }
}
