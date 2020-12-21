import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { DriversComponent } from './drivers/drivers.component';
import { IncidentCaseComponent } from './incident-case/incident-case.component';
import { AskAssistanceComponent} from './ask-assistance/ask-assistance.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DamageComponent } from './damage/damage.component';
import { VictimsComponent } from './victims/victims.component';
const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'incidentForm/:id',
        component: IncidentFormComponent,

      },
      {
        path: 'incidentForm',
        component: IncidentFormComponent,

      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path:'driver/:id',
        component: DriversComponent,
      },
      {
        path:'incidentCase',
        component: IncidentCaseComponent,
      },
      {
        path:'askassistance',
        component:AskAssistanceComponent
      },
      {
        path:'vehicle',
        component:VehiclesComponent
      },
      {
        path:'damage',
        component:DamageComponent
      },
      {
        path:'victim',
        component:VictimsComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

