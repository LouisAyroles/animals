import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VetComponent} from "./vet-component/vet.component";
import {VetFormComponent} from "./vet-form/vet-form.component";

const appRoutes: Routes = [
  { path: '', component: VetComponent },
  { path: 'create', component: VetFormComponent},
  { path: ':id', component: VetFormComponent},
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class VetRoutingModule {

}
