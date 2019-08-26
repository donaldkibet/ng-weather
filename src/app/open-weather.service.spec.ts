import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OpenWeatherService } from './open-weather.service';
import { customDatePipe } from './custom/customDatePipe';

fdescribe('OpenWeatherService', () => {

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
        },
        {
          dt: 1566918000,
          main: {
            temp: 26.77,
            temp_min: 26.77,
            temp_max: 26.77,
            pressure: 1013.15,
            sea_level: 1013.15,
            grnd_level: 868.3,
            humidity: 37,
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
            all: 36
          },
          wind: {
            speed: 5.63,
            deg: 110.576
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-27 15:00:00'
        },
        {
          dt: 1566928800,
          main: {
            temp: 24.22,
            temp_min: 24.22,
            temp_max: 24.22,
            pressure: 1016.14,
            sea_level: 1016.14,
            grnd_level: 869.97,
            humidity: 42,
            temp_kf: 0
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
            all: 56
          },
          wind: {
            speed: 6.1,
            deg: 90.31
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-27 18:00:00'
        },
        {
          dt: 1566939600,
          main: {
            temp: 19.95,
            temp_min: 19.95,
            temp_max: 19.95,
            pressure: 1017.24,
            sea_level: 1017.24,
            grnd_level: 870.98,
            humidity: 61,
            temp_kf: 0
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02n'
            }
          ],
          clouds: {
            all: 20
          },
          wind: {
            speed: 2.92,
            deg: 93.848
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-27 21:00:00'
        },
        {
          dt: 1566950400,
          main: {
            temp: 17.86,
            temp_min: 17.86,
            temp_max: 17.86,
            pressure: 1016.61,
            sea_level: 1016.61,
            grnd_level: 870.23,
            humidity: 72,
            temp_kf: 0
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
            all: 29
          },
          wind: {
            speed: 2.28,
            deg: 87.489
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-28 00:00:00'
        },
        {
          dt: 1566961200,
          main: {
            temp: 16.87,
            temp_min: 16.87,
            temp_max: 16.87,
            pressure: 1017.67,
            sea_level: 1017.67,
            grnd_level: 871.15,
            humidity: 77,
            temp_kf: 0
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02n'
            }
          ],
          clouds: {
            all: 11
          },
          wind: {
            speed: 1.01,
            deg: 80.771
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-28 03:00:00'
        },
        {
          dt: 1566972000,
          main: {
            temp: 20.66,
            temp_min: 20.66,
            temp_max: 20.66,
            pressure: 1018.87,
            sea_level: 1018.87,
            grnd_level: 873.22,
            humidity: 60,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d'
            }
          ],
          clouds: {
            all: 6
          },
          wind: {
            speed: 1.39,
            deg: 212.922
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-28 06:00:00'
        },
        {
          dt: 1566982800,
          main: {
            temp: 26.15,
            temp_min: 26.15,
            temp_max: 26.15,
            pressure: 1015.54,
            sea_level: 1015.54,
            grnd_level: 871.23,
            humidity: 41,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d'
            }
          ],
          clouds: {
            all: 5
          },
          wind: {
            speed: 3.9,
            deg: 202.834
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-28 09:00:00'
        },
        {
          dt: 1566993600,
          main: {
            temp: 29.18,
            temp_min: 29.18,
            temp_max: 29.18,
            pressure: 1011.94,
            sea_level: 1011.94,
            grnd_level: 867.78,
            humidity: 31,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d'
            }
          ],
          clouds: {
            all: 3
          },
          wind: {
            speed: 3.77,
            deg: 193.929
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-28 12:00:00'
        },
        {
          dt: 1567004400,
          main: {
            temp: 27.21,
            temp_min: 27.21,
            temp_max: 27.21,
            pressure: 1012.14,
            sea_level: 1012.14,
            grnd_level: 867.07,
            humidity: 37,
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
            all: 40
          },
          wind: {
            speed: 4,
            deg: 112.102
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-28 15:00:00'
        },
        {
          dt: 1567015200,
          main: {
            temp: 23.12,
            temp_min: 23.12,
            temp_max: 23.12,
            pressure: 1016.22,
            sea_level: 1016.22,
            grnd_level: 870.26,
            humidity: 53,
            temp_kf: 0
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
            speed: 1.42,
            deg: 40.194
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-28 18:00:00'
        },
        {
          dt: 1567026000,
          main: {
            temp: 20.92,
            temp_min: 20.92,
            temp_max: 20.92,
            pressure: 1017.82,
            sea_level: 1017.82,
            grnd_level: 871.38,
            humidity: 60,
            temp_kf: 0
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
            all: 76
          },
          wind: {
            speed: 2.15,
            deg: 81.866
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-28 21:00:00'
        },
        {
          dt: 1567036800,
          main: {
            temp: 19.48,
            temp_min: 19.48,
            temp_max: 19.48,
            pressure: 1017.27,
            sea_level: 1017.27,
            grnd_level: 870.82,
            humidity: 67,
            temp_kf: 0
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n'
            }
          ],
          clouds: {
            all: 87
          },
          wind: {
            speed: 2.33,
            deg: 74.469
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-29 00:00:00'
        },
        {
          dt: 1567047600,
          main: {
            temp: 19.02,
            temp_min: 19.02,
            temp_max: 19.02,
            pressure: 1017.57,
            sea_level: 1017.57,
            grnd_level: 871.09,
            humidity: 70,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n'
            }
          ],
          clouds: {
            all: 82
          },
          wind: {
            speed: 0.84,
            deg: 105.964
          },
          rain: {
            '3h': 0.125
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-29 03:00:00'
        },
        {
          dt: 1567058400,
          main: {
            temp: 20.98,
            temp_min: 20.98,
            temp_max: 20.98,
            pressure: 1019.27,
            sea_level: 1019.27,
            grnd_level: 873.31,
            humidity: 62,
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
            all: 54
          },
          wind: {
            speed: 1.33,
            deg: 202.643
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-29 06:00:00'
        },
        {
          dt: 1567069200,
          main: {
            temp: 26.14,
            temp_min: 26.14,
            temp_max: 26.14,
            pressure: 1016.07,
            sea_level: 1016.07,
            grnd_level: 871.15,
            humidity: 45,
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
            all: 50
          },
          wind: {
            speed: 3.39,
            deg: 197.393
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-29 09:00:00'
        },
        {
          dt: 1567080000,
          main: {
            temp: 28.92,
            temp_min: 28.92,
            temp_max: 28.92,
            pressure: 1011.69,
            sea_level: 1011.69,
            grnd_level: 867.74,
            humidity: 35,
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
            all: 55
          },
          wind: {
            speed: 4.21,
            deg: 123.532
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-29 12:00:00'
        },
        {
          dt: 1567090800,
          main: {
            temp: 27.15,
            temp_min: 27.15,
            temp_max: 27.15,
            pressure: 1012.06,
            sea_level: 1012.06,
            grnd_level: 867.13,
            humidity: 37,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d'
            }
          ],
          clouds: {
            all: 90
          },
          wind: {
            speed: 3.32,
            deg: 150.103
          },
          rain: {
            '3h': 1.062
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-29 15:00:00'
        },
        {
          dt: 1567101600,
          main: {
            temp: 23.28,
            temp_min: 23.28,
            temp_max: 23.28,
            pressure: 1015.44,
            sea_level: 1015.44,
            grnd_level: 869.15,
            humidity: 50,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n'
            }
          ],
          clouds: {
            all: 87
          },
          wind: {
            speed: 5.89,
            deg: 72.774
          },
          rain: {
            '3h': 0.75
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-29 18:00:00'
        },
        {
          dt: 1567112400,
          main: {
            temp: 19.85,
            temp_min: 19.85,
            temp_max: 19.85,
            pressure: 1016.46,
            sea_level: 1016.46,
            grnd_level: 870.28,
            humidity: 66,
            temp_kf: 0
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
            all: 65
          },
          wind: {
            speed: 2.9,
            deg: 77.022
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-29 21:00:00'
        },
        {
          dt: 1567123200,
          main: {
            temp: 18.57,
            temp_min: 18.57,
            temp_max: 18.57,
            pressure: 1015.47,
            sea_level: 1015.47,
            grnd_level: 869.39,
            humidity: 72,
            temp_kf: 0
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
            all: 62
          },
          wind: {
            speed: 1.9,
            deg: 96.267
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-30 00:00:00'
        },
        {
          dt: 1567134000,
          main: {
            temp: 18.16,
            temp_min: 18.16,
            temp_max: 18.16,
            pressure: 1016.65,
            sea_level: 1016.65,
            grnd_level: 870.47,
            humidity: 74,
            temp_kf: 0
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n'
            }
          ],
          clouds: {
            all: 100
          },
          wind: {
            speed: 1.54,
            deg: 117.843
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-30 03:00:00'
        },
        {
          dt: 1567144800,
          main: {
            temp: 20.62,
            temp_min: 20.62,
            temp_max: 20.62,
            pressure: 1018.43,
            sea_level: 1018.43,
            grnd_level: 872.62,
            humidity: 61,
            temp_kf: 0
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d'
            }
          ],
          clouds: {
            all: 99
          },
          wind: {
            speed: 2.14,
            deg: 99.929
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-30 06:00:00'
        },
        {
          dt: 1567155600,
          main: {
            temp: 25.23,
            temp_min: 25.23,
            temp_max: 25.23,
            pressure: 1015.36,
            sea_level: 1015.36,
            grnd_level: 870.78,
            humidity: 44,
            temp_kf: 0
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d'
            }
          ],
          clouds: {
            all: 86
          },
          wind: {
            speed: 2.27,
            deg: 153.695
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-30 09:00:00'
        },
        {
          dt: 1567166400,
          main: {
            temp: 28.35,
            temp_min: 28.35,
            temp_max: 28.35,
            pressure: 1011.41,
            sea_level: 1011.41,
            grnd_level: 867.26,
            humidity: 36,
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
            all: 80
          },
          wind: {
            speed: 4.14,
            deg: 126.812
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-30 12:00:00'
        },
        {
          dt: 1567177200,
          main: {
            temp: 26.75,
            temp_min: 26.75,
            temp_max: 26.75,
            pressure: 1011.53,
            sea_level: 1011.53,
            grnd_level: 866.89,
            humidity: 38,
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
            all: 63
          },
          wind: {
            speed: 5.84,
            deg: 111.483
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-30 15:00:00'
        },
        {
          dt: 1567188000,
          main: {
            temp: 22.05,
            temp_min: 22.05,
            temp_max: 22.05,
            pressure: 1014.4,
            sea_level: 1014.4,
            grnd_level: 868.38,
            humidity: 53,
            temp_kf: 0
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
            all: 56
          },
          wind: {
            speed: 6.82,
            deg: 90.521
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-30 18:00:00'
        },
        {
          dt: 1567198800,
          main: {
            temp: 20.48,
            temp_min: 20.48,
            temp_max: 20.48,
            pressure: 1015.62,
            sea_level: 1015.62,
            grnd_level: 869.77,
            humidity: 62,
            temp_kf: 0
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n'
            }
          ],
          clouds: {
            all: 88
          },
          wind: {
            speed: 3.22,
            deg: 100.322
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-30 21:00:00'
        },
        {
          dt: 1567209600,
          main: {
            temp: 18.55,
            temp_min: 18.55,
            temp_max: 18.55,
            pressure: 1014.78,
            sea_level: 1014.78,
            grnd_level: 868.9,
            humidity: 72,
            temp_kf: 0
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
            all: 50
          },
          wind: {
            speed: 1.52,
            deg: 87.283
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-31 00:00:00'
        },
        {
          dt: 1567220400,
          main: {
            temp: 17.77,
            temp_min: 17.77,
            temp_max: 17.77,
            pressure: 1016.17,
            sea_level: 1016.17,
            grnd_level: 870.15,
            humidity: 74,
            temp_kf: 0
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
            all: 46
          },
          wind: {
            speed: 1.27,
            deg: 111.55
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-31 03:00:00'
        },
        {
          dt: 1567231200,
          main: {
            temp: 21.07,
            temp_min: 21.07,
            temp_max: 21.07,
            pressure: 1016.81,
            sea_level: 1016.81,
            grnd_level: 871.66,
            humidity: 58,
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
            all: 26
          },
          wind: {
            speed: 1.16,
            deg: 159.137
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-31 06:00:00'
        },
        {
          dt: 1567242000,
          main: {
            temp: 26.87,
            temp_min: 26.87,
            temp_max: 26.87,
            pressure: 1013.31,
            sea_level: 1013.31,
            grnd_level: 869.58,
            humidity: 38,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d'
            }
          ],
          clouds: {
            all: 7
          },
          wind: {
            speed: 3.72,
            deg: 201.77
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-31 09:00:00'
        },
        {
          dt: 1567252800,
          main: {
            temp: 29.65,
            temp_min: 29.65,
            temp_max: 29.65,
            pressure: 1009.17,
            sea_level: 1009.17,
            grnd_level: 865.72,
            humidity: 29,
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
            all: 51
          },
          wind: {
            speed: 3.32,
            deg: 197.01
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-31 12:00:00'
        },
        {
          dt: 1567263600,
          main: {
            temp: 28.01,
            temp_min: 28.01,
            temp_max: 28.01,
            pressure: 1010.29,
            sea_level: 1010.29,
            grnd_level: 865.85,
            humidity: 32,
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
            all: 56
          },
          wind: {
            speed: 4.22,
            deg: 109.607
          },
          sys: {
            pod: 'd'
          },
          dt_txt: '2019-08-31 15:00:00'
        },
        {
          dt: 1567274400,
          main: {
            temp: 23.73,
            temp_min: 23.73,
            temp_max: 23.73,
            pressure: 1013.27,
            sea_level: 1013.27,
            grnd_level: 867.69,
            humidity: 51,
            temp_kf: 0
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
            all: 75
          },
          wind: {
            speed: 8.27,
            deg: 85.723
          },
          sys: {
            pod: 'n'
          },
          dt_txt: '2019-08-31 18:00:00'
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
        customDatePipe
      ]
    });
    mockHttp = TestBed.get(HttpTestingController);
    service = TestBed.get(OpenWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should get the city current weather condition when give the city name', () => {
    service.getCityCurrentWeatherConditions('Eldoret').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    );
    const req = mockHttp.expectOne(`${fakeUrl}/weather?q=Eldoret&units=metric&appid=${fakeAPIKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(fakeCurrentWeather);
  });

  fit('should display the error message when unable to retrieve city conditions', () => {
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

  fit('should get the five day forecast of a city when given city name', () => {
    service.getCityFiveDayForecast('Eldoret').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    );
    const req = mockHttp.expectOne(`${fakeUrl}/forecast?q=Eldoret&units=metric&appid=${fakeAPIKey}`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
