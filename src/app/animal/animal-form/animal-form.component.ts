import {Component, OnInit} from '@angular/core';
import {AnimalService} from "../service/animal.service";
import {Animal} from "../Animal";
import { MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {ActivatedRoute, ParamMap, Router  } from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../utils/snack-bar/snack-bar.component";
import {DeleteDialogComponent} from "../../utils/delete-dialog/delete-dialog.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  animal: Animal = new Animal();
  isCreation: Boolean;

  constructor(private animalService: AnimalService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) {
  }

  configSuccess: MatSnackBarConfig = {
    panelClass: 'style-success',
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };


  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.isCreation = id == null;
      if (id !== null) {
        this.animalService.getAnimalByIndex(id).subscribe((animal: Animal) => this.animal = animal);
      }
    })
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      const onSave = () => {
        this.router.navigate(['/animals']);
      };
      if (this.isCreation) {
        this.animalService.create(this.animal).subscribe(onSave);
        this.openSnackBar('La fiche a bien été créée!');
      } else {
        this.animalService.update(this.animal).subscribe(onSave);
        this.openSnackBar('La fiche a bien été mise à jour!');
      }
    }
  }


  onDelete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.animalService.delete(this.animal.id).subscribe();
        this.openSnackBar('La fiche a bien été supprimée!');
        this.router.navigate(['/animals']);
      }
    });
  }

  openSnackBar(data: any) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: data,
      ...this.configSuccess
    });
  }
}
