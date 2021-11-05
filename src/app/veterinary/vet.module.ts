import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {VetComponent} from "./vet-component/vet.component";
import {VetRoutingModule} from "./vet-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {VetFormComponent} from "./vet-form/vet-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    VetComponent,
    VetFormComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    VetRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ]
})
export class VetModule { }
