import { Time } from "@angular/common";

export class ticketDTO{
  id:number;
  departure:string;
  arrival:string;
  date:Date;
  time:Time;

  constructor(id:number, departure:string, arrival:string, date:Date, time:Time){
    this.id=id;
    this.departure=departure;
    this.arrival=arrival;
    this.date=date;
    this.time=time;
  }
}
