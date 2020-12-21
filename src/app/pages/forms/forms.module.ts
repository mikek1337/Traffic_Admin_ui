import { NgModule } from '@angular/core';
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
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { IncidentCaseComponent } from './incident-case/incident-case.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { DriversComponent } from './drivers/drivers.component';
import { AskAssistanceComponent } from './ask-assistance/ask-assistance.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { VictimsComponent } from './victims/victims.component';
import { DamageComponent } from './damage/damage.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    LeafletModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    IncidentCaseComponent,
    IncidentFormComponent,
    DriversComponent,
    AskAssistanceComponent,
    VictimsComponent,
    DamageComponent,
    VehiclesComponent,
  ],
})
export class FormsModule { }
