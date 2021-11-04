import {Component, Inject, OnInit} from '@angular/core';
import {AnimalService} from "../service/animal.service";
import {Animal} from "../Animal";
import {MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {ActivatedRoute, ParamMap, Router  } from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

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
    duration: 1000,
    horizontalPosition: 'left',
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

  onSubmit() {
    if (this.isCreation) {
      this.animalService.create(this.animal).subscribe();
      this.openSnackBar('La fiche a biene été créée!');
    } else {
      this.animalService.update(this.animal).subscribe();
      this.openSnackBar('La fiche a biene été mise à jour!');
    }
    this.snackBar.openFromComponent(AnimalSnackComponent, {
      duration: 5 * 1000,
    });
    this.router.navigate(['/animals']);
  }


  onDelete() {
    const dialogRef = this.dialog.open(DeleteConfirmDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.animalService.delete(this.animal.id).subscribe();
        this.router.navigate(['/animals']);
      }
    });
  }



  openSnackBar(data: any) {
    this.snackBar.openFromComponent(AnimalSnackComponent, {
      data: data,
      ...this.configSuccess
    });
  }
}


@Component({
  selector: 'delete-confirm',
  templateUrl: 'delete-dialog.html',
})
export class DeleteConfirmDialog {}

@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.html',
  styles: [
    `
    .snackbar-animal {
      color: white;
    }
  `,
  ],
})
export class AnimalSnackComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
