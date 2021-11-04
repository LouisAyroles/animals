import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalListComponent} from "./animal-list/animal-list.component";
import {AnimalRootComponent} from "./animal-root/animal-root.component";
import {AnimalFormComponent} from "./animal-form/animal-form.component";

const animalRoutes: Routes = [{
  path: 'animals', component: AnimalRootComponent,
  children: [
  {
    path: '',
    component: AnimalListComponent
  },
    {
      path: 'create',
      component: AnimalFormComponent
    },
  {
    path: ':id',
    component: AnimalFormComponent
  }
]
}];

@NgModule({
    imports: [RouterModule.forChild(animalRoutes)],
  exports: [RouterModule]
})

export class AnimalRoutingModule {

}
