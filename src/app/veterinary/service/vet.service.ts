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

  public getVeterinarianByIndex(index: string) : Observable<Veterinarian> {
    return this.httpClient.get<Veterinarian>('/api/veterinarians/' + index);
  }

  public delete (id: number) : Observable<Veterinarian> {
    return this.httpClient.delete<Veterinarian>(`/api/veterinarians/${id}`);
  }
  public create (data: Veterinarian) : Observable<Veterinarian> {
    return this.httpClient.post<Veterinarian>(`/api/veterinarians/`, data);
  }
  public update (data: Veterinarian) : Observable<Veterinarian> {
    return this.httpClient.put<Veterinarian>(`/api/veterinarians/${data.id}`, data);
  }

}
