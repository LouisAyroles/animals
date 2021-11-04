import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalComponent} from "./animal-item/animal.component";
import {MatCardModule} from "@angular/material/card";
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import {RouterModule} from "@angular/router";
import {AnimalRoutingModule} from "./animal-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  AnimalFormComponent,
  AnimalSnackComponent,
  DeleteConfirmDialog
} from './animal-form/animal-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AnimalComponent,
    AnimalListComponent,
    AnimalRootComponent,
    AnimalFormComponent,
    AnimalSnackComponent,
    DeleteConfirmDialog
  ],
  imports: [
    MatCardModule,
    CommonModule,
    RouterModule,
    AnimalRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    AnimalComponent,
    AnimalListComponent,
    AnimalFormComponent,
  ]
})
export class AnimalModule { }
