import {Party} from './party';
export class Enums
{
    enumId:string;
    enumTypeId:string;
    description:string;
}
export class InformIncident
{
    infromIncidentId:any;
    incidetType:string;
    incidentDate:string;
    injury:boolean;
    locationDetail:string;
    noofVehicleInvolved:any
    partyId:any;
    weatherCondition:string;

}

export class incident
{
    advice:any;
    damage:any;
    driver:any;
    endTime:Date;
    incidentAddress:string;
    incidentContributingCause:string;
    incidentCriticalLevel:string;
    incidentDate:Date;
    incidentId:any;
    incidentPicture:any;
    incidentStatus:string;
    incidentSubcity:string;
    incidentType:string;
    initialReportedTime:Date;
    lightCondition:string;
    mapInformation:string;
    noOfCommuterInvolve:any
    noOfVehiclesInvolve:any;
    partyId:any;
    roadAlignment:string;
    roadGeometryType:string;
    roadSeparation:string;
    roadSurfaceCondition:string;
    roadSurfaceType:string;
    vehicles:any;
    victim:any;
    weatherCondition:string;
}

export class driver
{
    driverAge: any
    driverEducationLevel: string
    driverEducationLevelNavigation: null
    driverId: any
    driverLicenceLevel: string
    driverLicenceLevelNavigation: null
    driverName: string
    driverSDrivigExperience: string
    driverSDrivigExperienceNavigation: null
    driverSex: string
    driverSexNavigation: null
    driverSubcity: string
    driverSubcityNavigation: null
    driverVehicleRelationship: string
    driverVehicleRelationshipNavigation: null
    driversPlate: string
    //incident: incident
    incidentId: any;
    nationality: string;
    //party: Party;
    partyId: any;

    constructor()
    {
        //this.party = new Party();
        //this.incident = new incident();
    }
}

export class vehicle
{
    vehicleNo:any;
    vehicleAge:string;
    vehicleManeuver:string;
    vehicleModel:string;
    vehicleName:string;
    vehicleType:string;
    vehicleOwnerName:string;
    vehicleOwnership:string;
    vehicleRelatedDeficiency:string;
    vehicleDamagedParts:string;
    insurancePolicy:string
    insuranceExpiryDate:any;
    speedEstimated:any;
    licensePlate:string;
    incidentId:any;
    partyId:any;
}
export class damage
{
    damageId:string;
    damageType:string;
    damageCatagory:string;
    estimateDamagePrice:any;
    itemName:string;
    incidentId;
}
export class victim
{

    victimAge: string;
    victimHealthStatus: string;
    victimManeuver: string;
    victimProfession: string;
    partyId:any;
    incidentId:any;
    party:Party

    constructor()
    {
        this.party = new Party;  
    }
}