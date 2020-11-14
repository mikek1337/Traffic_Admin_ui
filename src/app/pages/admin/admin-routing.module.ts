import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AdminComponent } from './admin.component';
import { AddTrafficComponent } from './add-traffic/add-traffic.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [{
  path:'',
  component:AdminComponent,
  children: [
    {
      path: 'Add-Traffic',
      component: AddTrafficComponent
    },
    {
      path:'View-User',
      component:ViewUserComponent
    }
  ]

}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
