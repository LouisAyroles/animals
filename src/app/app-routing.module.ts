import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'animals',pathMatch: 'full' },
  { path: 'veterinarians', loadChildren: () => import('./veterinary/vet.module').then(mod=> mod.VetModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
