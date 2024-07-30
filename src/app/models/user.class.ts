import { Timestamp } from "@angular/fire/firestore";

export class User{
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    address: string; 
    zipCode: number;
    city: string;
    email: string;

    constructor(obj?: any){
        this.id = obj? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : new Date;
        this.address = obj ? obj.address : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }
}