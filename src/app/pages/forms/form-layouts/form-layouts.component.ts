import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enums } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  enums: Enums;
  constructor(public https:HttpService, public route:Router) { }
  ngOnInit() {
    this.https.GetEnums("INTERMEDIATE_INCIDET_LEVEL").subscribe(Response=>{

      this.enums = Response

    });
  }

}
