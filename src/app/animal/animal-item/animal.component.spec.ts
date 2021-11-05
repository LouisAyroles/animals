import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalComponent } from './animal.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Animal} from "../Animal";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

describe('AnimalComponent', () => {
  let component: AnimalComponent;
  let fixture: ComponentFixture<AnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
      RouterTestingModule,
      MatCardModule,
      MatButtonModule],
      declarations: [ AnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalComponent);
    component = fixture.componentInstance;
    component.animal = new Animal();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
