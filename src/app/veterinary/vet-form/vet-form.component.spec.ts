import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetFormComponent } from './vet-form.component';
import {MAT_SNACK_BAR_DATA, MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";

describe('VetFormComponent', () => {
  let component: VetFormComponent;
  let fixture: ComponentFixture<VetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      MatSnackBarModule,
      RouterTestingModule,
      MatDialogModule,
      FormsModule],
      declarations: [ VetFormComponent],
      providers: [ {provide: MAT_SNACK_BAR_DATA,
        useValue: 'test'}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
