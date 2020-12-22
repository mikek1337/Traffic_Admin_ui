import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SysUserComponent} from './sys-user.component';
import {RecordsComponent} from './records/records.component';
import {ReportComponent} from './report/report.component';
const routes: Routes = [{
	path:'',
	component:SysUserComponent,
	children:[
		{
			path:'sysrecords',
			component:RecordsComponent
		},
		{
			path:'report',
			component:ReportComponent
		}
	]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysUserRoutingModule { }
