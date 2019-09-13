import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OpenWeatherService } from './open-weather.service';
import { CustomDatePipe } from './custom/customDatePipe';

describe('OpenWeatherService', () => {

  let mockHttp: HttpTestingController;
  let service: OpenWeatherService;
  const fakeUrl = 'https://api.openweathermap.org/data/2.5';
  const fakeAPIKey = 'eb3153008d4fbc9414f3069b29b9cae1';
  const errorResponse = [
    {
      cod: '404',
      message: 'city not found'
    }
  ];

  const fakeForecast = [
    {
      cod: '200',
      message: 0.0084,
      cnt: 40,
      list: [
        {
          dt: 1566853200,
          main: {
            temp: 13.83,
            temp_min: 13.83,
            temp_max: 19.63,
            pressure: 1018.32,
            sea_level: 1018.32,
            grnd_level: 871.95,
            humidity: 65,
            temp_kf: -5.8
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n'
            }
          ],
          clouds: {
            all: 57
          },
          wind: {
            speed: 2.32,
            deg: 70.767
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-26 21:00:00'
        },
        {
          dt: 1566864000,
          main: {
            temp: 13.08,
            temp_min: 13.08,
            temp_max: 17.43,
            pressure: 1017.6,
            sea_level: 1017.6,
            grnd_level: 871.21,
            humidity: 77,
            temp_kf: -4.35
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n'
            }
          ],
          clouds: {
            all: 28
          },
          wind: {
            speed: 2.04,
            deg: 79.27
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-27 00:00:00'
        },
        {
          dt: 1566874800,
          main: {
            temp: 14.65,
            temp_min: 14.65,
            temp_max: 17.55,
            pressure: 1018.56,
            sea_level: 1018.56,
            grnd_level: 871.99,
            humidity: 74,
            temp_kf: -2.9
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n'
            }
          ],
          clouds: {
            all: 9
          },
          wind: {
            speed: 1.1,
            deg: 105.26
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-27 03:00:00'
        },
        {
          dt: 1566885600,
          main: {
            temp: 19.64,
            temp_min: 19.64,
            temp_max: 21.09,
            pressure: 1019.61,
            sea_level: 1019.61,
            grnd_level: 873.88,
            humidity: 56,
            temp_kf: -1.45
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d'
            }
          ],
          clouds: {
            all: 17
          },
          wind: {
            speed: 1.35,
            deg: 171.846
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-27 06:00:00'
        },
        {
          dt: 1566896400,
          main: {
            temp: 25.79,
            temp_min: 25.79,
            temp_max: 25.79,
            pressure: 1016.39,
            sea_level: 1016.39,
            grnd_level: 872.07,
            humidity: 39,
            temp_kf: 0
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d'
            }
          ],
          clouds: {
            all: 57
          },
          wind: {
            speed: 3.43,
            deg: 151.955
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-27 09:00:00'
        },
        {
          dt: 1566907200,
          main: {
            temp: 29.07,
            temp_min: 29.07,
            temp_max: 29.07,
            pressure: 1013.15,
            sea_level: 1013.15,
            grnd_level: 868.85,
            humidity: 30,
            temp_kf: 0
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d'
            }
          ],
          clouds: {
            all: 29
          },
          wind: {
            speed: 4.12,
            deg: 166.682
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-27 12:00:00'
        }
      ],
      city: {
        id: 184745,
        name: 'Eldoret',
        coord: {
          lat: -1.2833,
          lon: 36.8172
        },
        country: 'KE',
        population: 2750547,
        timezone: 10800,
        sunrise: 1566790349,
        sunset: 1566833840
      }
    }
  ];

  const fakeCurrentWeather = [
    {
      coord: {
        lon: 35.27,
        lat: 0.52
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      base: 'stations',
      main: {
        temp: 15.13,
        pressure: 1017.01,
        humidity: 86,
        temp_min: 15.13,
        temp_max: 15.13,
        sea_level: 1017.01,
        grnd_level: 818.57
      },
      wind: {
        speed: 0.52,
        deg: 300.697
      },
      clouds: {
        all: 72
      },
      dt: 1566853588,
      sys: {
        message: 0.0067,
        country: 'KE',
        sunrise: 1566877024,
        sunset: 1566920674
      },
      timezone: 10800,
      id: 198629,
      name: 'Eldoret',
      cod: 200
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        OpenWeatherService,
        CustomDatePipe
      ]
    });
    mockHttp = TestBed.get(HttpTestingController);
    service = TestBed.get(OpenWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the city current weather condition when give the city name', () => {
    service.getCityCurrentWeatherConditions('Eldoret').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    );
    const req = mockHttp.expectOne(`${fakeUrl}/weather?q=Eldoret&units=metric&appid=${fakeAPIKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(fakeCurrentWeather);
  });

  it('should display the error message when unable to retrieve city conditions', () => {
    service.getCityCurrentWeatherConditions('Eldoret').subscribe(
      (response) => {
        expect(response).toBeTruthy();
        expect(response[0].cod).toBe('404');
        expect(response[0].message).toBe('city not found');
      }
    );
    const req = mockHttp.expectOne(`${fakeUrl}/weather?q=Eldoret&units=metric&appid=${fakeAPIKey}`);
    expect(req.request.method).toEqual('GET');
    req.flush(errorResponse);
  });

  it('should get the five day forecast of a city when given city name', () => {
    service.getCityFiveDayForecast('Eldoret').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    );
    const req = mockHttp.expectOne(`${fakeUrl}/forecast?q=Eldoret&units=metric&appid=${fakeAPIKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(fakeForecast);
  });

  it('should return a error message when unable to retrieve forecast', () => {
    service.getCityFiveDayForecast('Eldoret').subscribe(
      (response) => {
        expect(response).toBeTruthy();
        expect(response[0].cod).toBe('404');
        expect(response[0].message).toBe('city not found');
      }
    );
    const req = mockHttp.expectOne(`${fakeUrl}/forecast?q=Eldoret&units=metric&appid=${fakeAPIKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(errorResponse);
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

});
