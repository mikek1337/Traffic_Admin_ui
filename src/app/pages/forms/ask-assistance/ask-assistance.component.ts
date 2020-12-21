import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {HttpService} from 'app/@core/service/http.service';
import {Party} from 'app/@core/models/party';
import {incident} from 'app/@core/models/incident';
import {UiService} from 'app/@core/service/ui.service'
import 'style-loader!leaflet/dist/leaflet.css';
@Component({
  selector: 'ngx-ask-assistance',
  templateUrl: './ask-assistance.component.html',
  styleUrls: ['./ask-assistance.component.scss']
})
export class AskAssistanceComponent implements OnInit {

  constructor(private http:HttpService,private uiservice:UiService) { }
  map: L.Map;
  traffic: Party;
  latlng: any;
  partyname:any
  location:any
options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),

    ],

    zoom: 14,
    center: L.latLng({ lat: 8.9806, lng: 38.7578 }),

  };
  ngOnInit(): void {
  }

  onmapready(map: L.Map) {
  	this.map = map;
  	console.log(this.map)
  	this.http.getinvestofficers().subscribe(res=>{
  		this.traffic = res;
  		for (const key in this.traffic) {
  		console.log(this.traffic[key]);
        this.latlng = this.traffic[key].workingStation.split(",");
        const name = this.traffic[key].partyName
        const id = this.traffic[key].partyId;
        console.log(this.latlng)
        this.addtrafficpolicemarker(this.latlng, name, id);
  		}
  	})
  	this.getlocation();

  }
  getlocation()
  {
  	
  	this.map.locate()
  	this.map.on('locationfound',(event)=>{
  		this.location= event.latlng.lat +","+event.latlng.lng;
  		console.log(this.location)
  		const marker = L.marker(event.latlng)
  		marker.addTo(this.map);
  	},)
  }

  addtrafficpolicemarker(location: any, name: string, id: any) {
    const marker = L.marker(location).bindPopup("Traffic on location: " + name).openPopup(L.latLng({ lat: location[0], lng: location[1] })).setIcon(L.icon({iconSize: [40, 40],
      iconUrl: "assets/images/investigator.png"}));
    console.log(marker.togglePopup())
    marker.addTo(this.map);
    marker.on("click", fn => {
      const partyn = marker.getPopup().getContent().toString();
      const splited = partyn.split(":");
      this.partyname = id

    })
  }
  ask_assistance()
  {
   let incidents = new incident()
   if (this.partyname==undefined) {
   	this.uiservice.showToast("danger","ልክ ያልሆነ ጥያቄ","መርማሪ መኮንን መምረጥ ያስፈልግዎታል")
   }
   else{
   incidents.partyId = this.partyname;
   incidents.mapInformation = this.location;
   incidents.incidentStatus = "INCIDENT_APPROVED";
   this.http.ask(incidents).subscribe(res=>{
   	if (res==null) {
   		this.uiservice.showToast("success","የጥያቄ እርዳታ","ጥያቄ ተጠናቅቋል")
   	}
   })
  }
}
}