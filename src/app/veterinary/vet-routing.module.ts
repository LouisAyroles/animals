import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VetComponent} from "./vet-component/vet.component";

const appRoutes: Routes = [
  { path: '', component: VetComponent },
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class VetRoutingModule {

}
