[![Build Status](https://travis-ci.org/donaldkibet/ng-weather.svg?branch=master)](https://travis-ci.org/donaldkibet/ng-weather)
# NgWeather

This is a project to display the current and five day weather forecast of a select city. By default `Eldoret` is the default city. Implemented using
* NodeJS V12.7.0
* Angular 8.0.3

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Using docker

1. Run the docker build command to build the image `docker build -t {image-name} .`
2. Spin the container up by running the command  `docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm {imageName`
3. Navigate to `http://localhost:4200/` to view the running application.


