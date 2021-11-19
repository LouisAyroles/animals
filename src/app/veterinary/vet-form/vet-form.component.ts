import {Component, OnInit} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {ActivatedRoute, ParamMap, Router  } from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Veterinarian} from "../Veterinarian";
import {SnackBarComponent} from "../../utils/snack-bar/snack-bar.component";
import {VetService} from "../service/vet.service";
import {DeleteDialogComponent} from "../../utils/delete-dialog/delete-dialog.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss']
})
export class VetFormComponent implements OnInit {

  vet: Veterinarian = new Veterinarian();
  isCreation: Boolean;
  configSuccess: MatSnackBarConfig = {
    panelClass: 'style-success',
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(private vetService: VetService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.isCreation = id == null;
      if (id !== null) {
        console.log(id);
        this.vetService.getVeterinarianByIndex(id).subscribe((vet: Veterinarian) => this.vet = vet);
      }
    })
  }

  openSnackBar(data: any) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: data,
      ...this.configSuccess
    });
  }

  onSubmit(form: FormGroup) {
    if(form.valid){
      const onSave = () => {
        this.router.navigate(['/veterinarians']);
      };

      if (this.isCreation) {
        this.vetService.create(this.vet).subscribe(onSave);
        this.openSnackBar('La fiche a biene été créée!');
      } else {
        this.vetService.update(this.vet).subscribe(onSave);
        this.openSnackBar('La fiche a biene été mise à jour!');
      }
    }
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vetService.delete(this.vet.id).subscribe();
        this.openSnackBar('La fiche a bien été supprimé!');
        this.router.navigate(['/veterinarians']);
      }
    });
  }
}
