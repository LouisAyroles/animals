import { TestBed } from '@angular/core/testing';

import { VetService } from './vet.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VetService', () => {
  let service: VetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
