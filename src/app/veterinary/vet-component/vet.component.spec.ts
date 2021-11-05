import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetComponent } from './vet.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VetComponent', () => {
  let component: VetComponent;
  let fixture: ComponentFixture<VetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ VetComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
