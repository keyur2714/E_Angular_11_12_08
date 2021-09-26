import { Department } from "./department.model";

export class Employee {
    constructor(public id ?: number,public name ?: string,public designation ?: string,public city ?: string,public mobileNo ?: string,public email ?: string,public salary ?: number,public gender ?: string,public dept ?: Department){}
}