import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../Animal";
import{AnimalService} from "../service/animal.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'animal-component',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
  providers: [AnimalService]
})
export class AnimalComponent implements OnInit {

  @Input() animal : Animal ;

  private animalService: AnimalService;

  constructor(animalService: AnimalService, private route: ActivatedRoute)
  {
    this.animalService = animalService;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (param: ParamMap) => {
      let id = param.get('id');
      if(id !== null){
        this.animalService.getAnimalByIndex(id).subscribe((animal: Animal) => this.animal = animal);
      }
    })

  }

}
