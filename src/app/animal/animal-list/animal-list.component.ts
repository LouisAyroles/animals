import {Component, OnInit, Output} from '@angular/core';
import {AnimalService} from "../service/animal.service";
import {Animal} from "../Animal";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})


export class AnimalListComponent implements OnInit {

  @Output() animals: Animal[];

  private animalService: AnimalService;

  constructor(animalService: AnimalService)
  {
    this.animalService = animalService;
  }
  ngOnInit(): void {
    this.animalService.getAllAnimals().subscribe((animals: Animal[]) => this.animals = animals);
  }

}
