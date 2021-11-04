import {Component, OnInit} from '@angular/core';
import {Animal} from "../Animal";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AnimalService} from "../service/animal.service";

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {

  animal: Animal;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (param: ParamMap) => {
      let id = param.get('id');
      if(id !== null){
        this.animalService.getAnimalByIndex(id).subscribe((animal: Animal) => this.animal = animal);
      }
    })

  }

}
