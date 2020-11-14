import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ViewCellComponent } from 'ng2-smart-table/lib/components/cell/cell-view-mode/view-cell.component';
@Component({
  selector: 'ngx-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  myValues: any;
  //myValues: any;
  constructor() {
   }
   data:any
  @Input() value;

  ngOnInit(): void {
    this.myValues = this.value;
  }

}
