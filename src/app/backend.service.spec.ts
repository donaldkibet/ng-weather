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

  it('should get all moods', () => {
    service.getAllMoods().subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    );
    const req = httpMock.expectOne(`${mockUrl}/mood`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should get a mood when given an id', () => {
    service.getMoodById('1').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    );
    const req = httpMock.expectOne(`${mockUrl}/mood/1`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should save a new mood when given a new mood object', () => {
    const mood = { id : 1, time: '20:20:15', date : new Date(), mood : 'Happy Evening'};
    service.newMood(new Mood(mood)).subscribe(
      (response) => {
        expect(response).toBeDefined();
      }
    );
    const req = httpMock.expectOne(`${mockUrl}/mood`);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
});
