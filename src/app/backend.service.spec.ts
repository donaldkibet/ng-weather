import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BackendService } from './backend.service';

describe('BackendService', () => {
  let httpMock: HttpTestingController;
  let service: BackendService;
  const mockUrl: String = 'http://localhost:8052';
  beforeEach(() => TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BackendService]
  })
  .compileComponents()
  .then(() => {
    service = TestBed.get(BackendService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  it('should be created', () => {
    const service: BackendService = TestBed.get(BackendService);
    expect(service).toBeTruthy();
  });

  it('should get All moods', () => {
      service.getAllMoods().subscribe(
        (response) => {
          expect(response).toBeTruthy();
        }
      );
      const req = httpMock.expectOne(`${mockUrl}/mood`);
      expect(req.request.method).toBe('GET');
      req.flush({});
  });
});
