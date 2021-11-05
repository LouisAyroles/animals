import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFormComponent } from './animal-form.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MAT_SNACK_BAR_DATA, MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

describe('AnimalFormComponent', () => {
  let component: AnimalFormComponent;
  let fixture: ComponentFixture<AnimalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
        FormsModule,
      MatIconModule],
      declarations: [ AnimalFormComponent ],
      providers: [ {provide: MAT_SNACK_BAR_DATA,
        useValue: 'test'}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
