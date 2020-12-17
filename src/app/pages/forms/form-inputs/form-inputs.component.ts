import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enums } from 'app/@core/models/incident';
import { HttpService } from 'app/@core/service/http.service';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  enums: Enums;
  constructor(public https:HttpService, public route:Router) { }
  ngOnInit() {
    this.https.GetEnums("MINOR_INCIDENT_LEVEL").subscribe(Response=>{

      this.enums = Response

    });
  }
}
