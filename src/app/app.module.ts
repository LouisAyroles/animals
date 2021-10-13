import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalComponent } from './animal/component/animal.component';
import {AnimalService} from "./animal/service/animal.service";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { VetComponent } from './veterinary/vet-component/vet.component';
import {VetService} from "./veterinary/service/vet.service";

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    VetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [AnimalService,
  VetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
