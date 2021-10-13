import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalComponent} from "./animal/component/animal.component";
import {VetComponent} from "./veterinary/vet-component/vet.component";

const appRoutes: Routes = [
  { path: '', component: AnimalComponent },
  { path: 'veterinarians', component: VetComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
