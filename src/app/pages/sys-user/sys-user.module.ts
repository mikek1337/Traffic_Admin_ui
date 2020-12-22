import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysUserRoutingModule } from './sys-user-routing.module';
import { RecordsComponent } from './records/records.component';
import { ReportComponent } from './report/report.component';
import {NbCardModule} from '@nebular/theme'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SysUserComponent} from './sys-user.component'
@NgModule({
  declarations: [RecordsComponent, ReportComponent,SysUserComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    SysUserRoutingModule
  ]
})
export class SysUserModule { }
