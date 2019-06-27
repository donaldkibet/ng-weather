import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { OpenWeatherService } from './open-weather.service';
import { customDatePipe } from './custom/customDatePipe';

describe('OpenWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[OpenWeatherService,customDatePipe]
  }));

  it('should be created', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    expect(service).toBeTruthy();
  });
});
