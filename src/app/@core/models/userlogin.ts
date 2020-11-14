import { Party } from './party';

export class Userinfo
{
    token:string;
    user:User;
    
    constructor()
    {
        this.user = new User();
    }

}
export class User{
    userLoginId: string;
    partyId:any;
    username: string;
    password: string;
    userstatus:string;
    party:Party

    constructor(){
        this.party = new Party();
    }
}
export class userdata{
    userLoginId: string;
    partyId:any;
    username: string;
    password: string;
    userstatus:string;
    partyName:string;
    partyType:string;
    subcity:string;
    workingStation:string;
    phoneNumber:any;
    address:string;
    partyStatus:string;
}