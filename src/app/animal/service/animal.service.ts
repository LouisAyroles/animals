import { Injectable } from '@angular/core';
import {Animal} from "../Animal";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService{


  constructor(private httpClient: HttpClient) {
  }

  public getAllAnimals() : Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/api/animals');
  }

  public getAnimalByIndex(index: string) : Observable<Animal> {
    return this.httpClient.get<Animal>('/api/animals/' + index);
  }

  public delete (id: number) : Observable<Animal> {
    return this.httpClient.delete<Animal>(`/api/animals/${id}`);
  }
  public create (data: Animal) : Observable<Animal> {
    return this.httpClient.post<Animal>(`/api/animals/`, data);
  }
  public update (data: Animal) : Observable<Animal> {
    return this.httpClient.put<Animal>(`/api/animals/${data.id}`, data);
  }
}
