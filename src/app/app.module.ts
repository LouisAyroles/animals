import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AnimalService} from "./animal/service/animal.service";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {VetService} from "./veterinary/service/vet.service";
import {AnimalModule} from "./animal/animal.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {VetModule} from "./veterinary/vet.module";
import { SnackBarComponent } from './utils/snack-bar/snack-bar.component';
import { DeleteDialogComponent } from './utils/delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AnimalModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    VetModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [AnimalService,
  VetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
