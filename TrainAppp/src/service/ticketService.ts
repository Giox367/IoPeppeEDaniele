import { Injectable } from "@angular/core";
import { AbstractService } from "./abstractService";
import { ticketDTO } from "src/dto/ticketDTO";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/enviroment/enviroment";

@Injectable({
  providedIn:'root',
})
export class ticketService extends AbstractService<ticketDTO>{
  constructor(http:HttpClient){
    super(http);
    this.type="/";
  }
  insertUser(ticketDTO: ticketDTO): Observable<ticketDTO> {
    return this.http.post<any>(environment.APIEndpoint + this.type + '/ticket/insert', ticketDTO)
  }
  getAllUser(): Observable<Array<ticketDTO>> {
    return this.http.get<any>(environment.APIEndpoint + this.type + '/ticket/getall')
  }
  delate(id :number): Observable<ticketDTO> {
    return this.http.post<any>(environment.APIEndpoint + this.type + '/ticket/delete',id)
  }
  getUser(id?: number): Observable <ticketDTO>{
    return this.http.get<any>(environment.APIEndpoint + this.type + '/ticket/read?ID='+ id)
  }

  updateUser(ticketDTO : ticketDTO): Observable <ticketDTO>{
    return this.http.post<any>(environment.APIEndpoint + this.type + '/ticket/update' ,ticketDTO)
  }


}
