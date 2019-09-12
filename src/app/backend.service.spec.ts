import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BackendService } from './backend.service';
import { Mood } from './models/Mood';

describe('BackendService', () => {
  let httpMock: HttpTestingController;
  let service: BackendService;
  const mockUrl = 'http://localhost:8052';
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BackendService]
  })
  .compileComponents()
  .then(() => {
    service = TestBed.get(BackendService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  it('should be created', () => {
    const serviceBackEnd: BackendService = TestBed.get(BackendService);
    expect(serviceBackEnd).toBeTruthy();
  });
});
