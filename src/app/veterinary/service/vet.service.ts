import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinarian} from "../Veterinarian";
import { environment } from '../../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class VetService {

  private API_URL= environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getAllVeterinarians() : Observable<Veterinarian[]> {
    return this.httpClient.get<Veterinarian[]>(this.API_URL + '/veterinarians');
  }

  public getVeterinarianByIndex(index: string) : Observable<Veterinarian> {
    return this.httpClient.get<Veterinarian>(this.API_URL + '/veterinarians/' + index);
  }

  public delete (id: number) : Observable<Veterinarian> {
    return this.httpClient.delete<Veterinarian>(this.API_URL + `/veterinarians/${id}`);
  }
  public create (data: Veterinarian) : Observable<Veterinarian> {
    return this.httpClient.post<Veterinarian>(this.API_URL + `/veterinarians/`, data);
  }
  public update (data: Veterinarian) : Observable<Veterinarian> {
    return this.httpClient.put<Veterinarian>(this.API_URL + `/veterinarians/${data.id}`, data);
  }

}
