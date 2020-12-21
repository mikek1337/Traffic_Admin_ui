import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { incident, InformIncident } from 'app/@core/models/incident';
import { Party } from 'app/@core/models/party';
import { HttpService } from 'app/@core/service/http.service';
import { UiService } from 'app/@core/service/ui.service';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
@Component({
  selector: 'ngx-assign-traffic',
  templateUrl: './assign-traffic.component.html',
  styleUrls: ['./assign-traffic.component.scss']
})
export class AssignTrafficComponent implements OnInit {

  constructor(private activateroute: ActivatedRoute, private http: HttpService, private route: Router,private toastrService: UiService) { }
  id: any;
  public incidents: InformIncident;
  mapdata: InformIncident;
  latlng: any;
  traffic: Party;
  partyname: string;
  incidentdate: Date;
  incident: incident;
  map: L.Map;
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),

    ],

    zoom: 14,
    center: L.latLng({ lat: 8.9806, lng: 38.7578 }),
    
  };

  index = 1;
  destroyByClick = true;
  duration = 10000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  ngOnInit(): void {

    //this.options.center = this.latlng;  
    //console.log(this.incidents[0].locationDetail.split(","));

    this.activateroute.params.subscribe(p => {
      this.id = p.id;
    });
    this.route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.route.navigated = false;
        this.pageData();
      }
    })
    this.pageData();
    //this.options.center = this.latlng;

  }
  pageData() {
    this.http.getincidentbyid(this.id).subscribe(res => {
      this.incidents = res;
      this.latlng = this.incidents[0].locatioDetail.split(",");

    })
  }



  onmapready(map: L.Map) {
    this.map = map;
    
    //this.pageData()
    console.log(this.incidents);
    this.activateroute.params.subscribe(p => {
      this.id = p.id;
      console.log(this.id)
    });
    this.http.getincidentbyid(this.id).subscribe(res => {
      this.incidents = res;
      this.latlng = this.incidents[0].locatioDetail.split(",");
      this.incidentdate = this.incidents[0].incidentDate;
      this.addincidentmarker(this.latlng, this.incidents[0].incidetType.replace("_", " "));

    })
    this.http.gettraffic().subscribe(res => {
      this.traffic = res;
      for (const key in this.traffic) {
        console.log(this.traffic[key]);
        this.latlng = this.traffic[key].workingStation.split(",");
        const name = this.traffic[key].partyName
        const id = this.traffic[key].partyId;
        this.addtrafficpolicemarker(this.latlng, name, id);
      }

    })



  }

  addincidentmarker(location: any, incidenttype: string) {
    const marker = L.marker(location).setIcon(L.icon({
      iconSize: [60, 60],
      iconUrl: "assets/images/car-accident.png"
    })).bindPopup(incidenttype).openPopup(L.latLng({ lat: location[0], lng: location[1] }))
    marker.addTo(this.map)
    const center = this.map.setView(L.latLng({ lat: location[0], lng: location[1] }), 16);
    console.log(marker.togglePopup())
    //L.Control.geocoder().addTo(this.map)
    console.log(location)
    console.log(marker.getPopup().getContent());

  }
  addtrafficpolicemarker(location: any, name: string, id: any) {
    const marker = L.marker(location).bindPopup("Traffic on location: " + name).openPopup(L.latLng({ lat: location[0], lng: location[1] })).setIcon(L.icon({iconSize: [60, 60],
      iconUrl: "assets/images/trafficicon.png"}));
    console.log(marker.togglePopup())
    marker.addTo(this.map);
    
    marker.on("click", fn => {
      const partyn = marker.getPopup().getContent().toString();
      const splited = partyn.split(":");
      this.partyname = id

    })
  }

  assign() {
    this.incident = new incident();
    this.incident.mapInformation = this.latlng[0] + "," + this.latlng[1];
    this.incident.partyId = this.partyname;
    this.incident.incidentStatus = "INCIDENT_APPROVED";
    this.incident.incidentDate = this.incidentdate;
    console.log(this.partyname);
    console.log(this.latlng);
    console.log(this.incident);
    this.http.approve(this.incident,this.incidents[0].infromIncidentId).subscribe(res => {
      if(res==null)
      {
        this.toastrService.showToast("success","Assign","Successful");
      }
    })

  }

}
