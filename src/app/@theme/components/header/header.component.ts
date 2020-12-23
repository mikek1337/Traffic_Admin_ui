import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpService } from 'app/@core/service/http.service';
import { StorageService } from 'app/@core/service/storage.service';
import { NotificationComponent } from '../notification/notification.component';
import { count } from 'console';
import { InformIncident } from 'app/@core/models/incident';
import { LogoutComponent } from 'app/auth/logout/logout.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  count:any;
  username:string;
  notify = NotificationComponent;
  position="bottom"
  men:{title:null}
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile',link:"pages/Admin/profile" }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private storage: StorageService,
              private httpservice:HttpService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private dialogService:NbDialogService ) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

      this.username=this.storage.getLocalStorage("username");
      this.getdata();
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

       window.setInterval(r=>{
        this.getdata()
      },40000)

  }
  getdata()
  {
    this.httpservice.getinformedincidents().subscribe(res=> {this.count=Object.keys(res).length;
      console.log(this.count)} )
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  viewed(){
    this.count = 0;
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  open()
  {
    this.dialogService.open(LogoutComponent)
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
