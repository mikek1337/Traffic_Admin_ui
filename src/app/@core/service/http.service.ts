import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Userinfo } from 'app/@core/models/userlogin';
import { Enums, incident, InformIncident } from '../models/incident';
import { Party, PartyType } from '../models/party';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  url = 'https://localhost:5001';
  Authenticate(username:string,password:string)
  {
    const param={
      "Username" : username,
      "Password" : password
    }

    return this.http.get<Userinfo>(this.url+"/Auth",{params:param})
  }
  GetPartyType()
  {
    return this.http.get<PartyType>(this.url+"/enum/party");
  }
  GetEnums(value:string)
  {
    return this.http.get<Enums>(this.url+"/enum?value="+value);
  }
  registerTraffic(user:User)
  {
    return this.http.post(this.url+"/Admin",user);
  }
  getregisteredusers()
  {
    return this.http.get<Party>(this.url+"/Admin/user");
  }
  getinformedincidents()
  {
    return this.http.get<InformIncident>(this.url+"/Admin/getincident");
  }
  getincident()
  {
    return this.http.get<incident>(this.url+"/Admin/getregisteredincident")
  }


}
