import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-incident-case',
  templateUrl: './incident-case.component.html',
  styleUrls: ['./incident-case.component.scss']
})
export class IncidentCaseComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  previouspage()
  {
    this.route.navigateByUrl("pages/forms/driver");
  }
}
