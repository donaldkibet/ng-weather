import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the title as 'ng-weather'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-weather');
  });

  it('should have the router-outlet element', () => {
    const routerElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(routerElement).toBeTruthy('the AppComponent does not contain router-outlet');
  });
});
