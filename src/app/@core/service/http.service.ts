import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Userinfo } from 'app/@core/models/userlogin';
import { Enums, incident, InformIncident, driver, vehicle, victim } from '../models/incident';
import { Party, PartyType } from '../models/party';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:5001';
  Authenticate(username: string, password: string) {
    const param = {
      "Username": username,
      "Password": password
    }

    return this.http.get<Userinfo>(this.url + "/Auth", { params: param })
  }
  getuser(id){
    return this.http.get<User>(this.url + "/Auth/getuser?id="+id);
  }
  GetPartyType() {
    return this.http.get<PartyType>(this.url + "/enum/party");
  }
  GetEnums(value: string) {
    return this.http.get<Enums>(this.url + "/enum?value=" + value);
  }
  registerTraffic(user: User) {
    return this.http.post(this.url + "/Admin", user);
  }
  getregisteredusers() {
    return this.http.get<Party>(this.url + "/Admin/user");
  }
  getinformedincidents() {
    return this.http.get<InformIncident>(this.url + "/Admin/getincident");
  }
  getincident(partyid,partytype) {
    if(partytype=="ADMINISTRATOR")
    {
      return this.http.get<incident>(this.url + "/Traffic?partyid="+partyid)
    }
    else{
    return this.http.get<incident>(this.url + "/Admin/getregisteredincident")
    }
  }
  getincidentbyid(id: any) {
    return this.http.get<InformIncident>(this.url + "/Admin/incidentbyid?id=" + id);
  }
  gettraffic() {
    return this.http.get<Party>(this.url + "/Admin/gettraffic");
  }
  approve(incident: incident,incidentid) {
    this.http.get(this.url+"/Admin/updateincident?id="+incidentid).subscribe(res=>{
      console.log(res)
    });
    return this.http.post(this.url + "/Admin/approveincident", incident);
  }
  disableuser(id,value)
  {
    return this.http.get(this.url+"/Admin/disableuser?id="+id+"&value="+value);
  }
  modify(user:User)
  {
    return this.http.post(this.url+"/Auth/update",user);
  }
  logout(id)
  {
    return this.http.get(this.url+"/Auth/logout?id="+id);
  }

  addincident(incident:incident)
  {
    return this.http.post(this.url+"/Traffic",incident);
  }
  adddriver(driver:driver)
  {
    return this.http.post(this.url+"/Traffic/adddriver",driver);
  }
  getinvestofficers()
  {
    return this.http.get<Party>(this.url+"/Traffic/getinvestigator");
  }

  ask(incident: incident)
  {
    return this.http.post(this.url + "/Admin/approveincident", incident);
  }
  addvehicle(vehicles: vehicle)
  {
    return this.http.post(this.url+"/Traffic/vehicle",vehicles);
  }
  addvictim(victim:victim)
  {
    return this.http.post(this.url+"/Traffic/victim",victim);
  }

}