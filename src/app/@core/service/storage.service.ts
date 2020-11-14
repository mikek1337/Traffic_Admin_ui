import { Injectable } from '@angular/core';
import { User, Userinfo } from 'app/@core/models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public storage:Storage
  constructor() { 
    this.storage = window.localStorage;
  }

  setLocalStrorage(userinfo:Userinfo)
  {
    this.storage.setItem('username',userinfo.user.username);
    this.storage.setItem('token',userinfo.token);
    this.storage.setItem('partyid',userinfo.user.partyId);
    this.storage.setItem('partyname',userinfo.user.party.partyName);
    this.storage.setItem('userid',userinfo.user.userLoginId);
  }
  getLocalStorage(key:string)
  {
    return this.storage.getItem(key);
  }
}
