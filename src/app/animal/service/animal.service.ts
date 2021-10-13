import { Injectable } from '@angular/core';
import {Animal} from "../Animal";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AnimalService{


  constructor(private httpClient: HttpClient) {
  }

  public getAllAnimals() : Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/api/animals');
  }

  public getAnimalByIndex(index: number) : Observable<Animal> {
    return this.httpClient.get<Animal>('/api/animal/' + index);
  }

}
