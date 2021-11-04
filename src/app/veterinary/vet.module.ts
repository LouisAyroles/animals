import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {VetComponent} from "./vet-component/vet.component";
import {VetRoutingModule} from "./vet-routing.module";



@NgModule({
  declarations: [
    VetComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    VetRoutingModule
  ]
})
export class VetModule { }
