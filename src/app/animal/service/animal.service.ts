import { Injectable } from '@angular/core';
import {Animal} from "../Animal";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AnimalService{

  private API_URL= environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getAllAnimals() : Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.API_URL + 'animals');
  }

  public getAnimalByIndex(index: string) : Observable<Animal> {
    return this.httpClient.get<Animal>(this.API_URL + 'animals/' + index);
  }

  public delete (id: number) : Observable<Animal> {
    return this.httpClient.delete<Animal>(this.API_URL + `animals/${id}`);
  }
  public create (data: Animal) : Observable<Animal> {
    return this.httpClient.post<Animal>(this.API_URL + `animals/`, data);
  }
  public update (data: Animal) : Observable<Animal> {
    return this.httpClient.put<Animal>(this.API_URL + `animals/${data.id}`, data);
  }
}
