import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../service/animal.service";
import {Animal} from "../Animal";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  animalService: AnimalService;
  animal: Animal = new Animal();
  isCreation: Boolean;

  constructor(animalService: AnimalService, private snackBar: MatSnackBar,  private route: ActivatedRoute) {
    this.animalService = animalService;
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.isCreation = id == null;
      if (id !== null) {
        this.animalService.getAnimalByIndex(id).subscribe((animal: Animal) => this.animal = animal);
      }
    })
  }

  onSubmit() {
    if(this.isCreation){
      this.animalService.create(this.animal).subscribe();
    }else{
      this.animalService.update(this.animal).subscribe();
    }
      this.snackBar.openFromComponent(AnimalSnackComponent, {
        duration: 5 * 1000,
      });
    }



}

@Component({
  selector: 'snack-bar',
  templateUrl: 'snackbar.component.html',
  styles: [
    `
    .snackbar-animal {
      color: white;
    }
  `,
  ],
})
export class AnimalSnackComponent {}
