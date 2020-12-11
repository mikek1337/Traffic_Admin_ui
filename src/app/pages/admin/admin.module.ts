import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AddTrafficComponent } from './add-traffic/add-traffic.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbStepperModule,
  
} from '@nebular/theme'
//import {NgbHighlight} from '@ng-bootstrap/ng-bootstrap'
import { ViewUserComponent } from './view-user/view-user.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {CdkTableModule} from '@angular/cdk/table';
import { ViewRecordsComponent } from './view-records/view-records.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AssignTrafficComponent } from './assign-traffic/assign-traffic.component';
import { ViewIncidentsComponent } from './view-incidents/view-incidents.component';

@NgModule({
  declarations: [AdminComponent, AddTrafficComponent, ViewUserComponent, ViewRecordsComponent, AssignTrafficComponent, ViewIncidentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    Ng2SmartTableModule,
    CdkTableModule,
    NbStepperModule,
    //NgbPaginationModule
    LeafletModule
    
  ]
})
export class AdminModule { }
