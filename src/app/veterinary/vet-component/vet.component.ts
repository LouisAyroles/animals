import { Component, OnInit } from '@angular/core';
import {VetService} from "../service/vet.service";
import {Veterinarian} from "../Veterinarian";

@Component({
  selector: 'app-vet-component',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.scss']
})
export class VetComponent implements OnInit {

  private vetService : VetService;
  public veterinarians : Veterinarian[] | undefined;

  constructor(vetService: VetService) {
    this.vetService = vetService;
  }

  ngOnInit(): void {
    this.vetService.getAllVeterinarians().subscribe((veterinarians: Veterinarian[]) => this.veterinarians = veterinarians);
  }

}
