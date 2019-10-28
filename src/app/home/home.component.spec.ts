import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { OpenWeatherService } from '../open-weather.service';
import { CustomDatePipe } from '../custom/customDatePipe';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [HttpClientTestingModule],
            providers: [OpenWeatherService, CustomDatePipe]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get the current city weather conditions', () => {
        pending();
    });

    it('should get the current city forecast conditions', () => {
        pending();
    });

    it('should get the the city weather forecast and weather condition when given the city name', () => {
        pending();
    });
});
