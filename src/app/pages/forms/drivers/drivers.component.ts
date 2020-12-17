import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  previouspage()
  {
    this.route.navigateByUrl("pages/forms/incidentForm");
  }
  nextpage()
  {
    this.route.navigateByUrl("pages/forms/incidentCase");
  }

}
