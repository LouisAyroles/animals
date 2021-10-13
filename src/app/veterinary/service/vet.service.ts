import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinarian} from "../Veterinarian";



@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private httpClient: HttpClient) { }

  public getAllVeterinarians() : Observable<Veterinarian[]> {
    return this.httpClient.get<Veterinarian[]>('/api/veterinarians');
  }

  public getVeterinarianByIndex(index: number) : Observable<Veterinarian> {
    return this.httpClient.get<Veterinarian>('/api/veterinarian/' + index);
  }

}
