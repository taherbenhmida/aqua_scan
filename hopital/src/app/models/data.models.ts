export class Employee{
    ID!: number;
    FirstName!: String;
    LastName!:String ;
    Prefix!: String;
    Position!: String;
    BirthDate!:String ;
    Address!: String;
    StateID!:number ;
    Notes?:String;
} 
export class State{
    ID!: number;
    Name!:String;
} 