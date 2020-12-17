import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpService } from 'app/@core/service/http.service';
import { NbAlertModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { StorageService } from 'app/@core/service/storage.service';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbAlertModule,
    FormsModule,    
    NbCheckboxModule,
    NbCardModule
  ],
  providers:[HttpService,StorageService]
})
export class AuthModule { }
