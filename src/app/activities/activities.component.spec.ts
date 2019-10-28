import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { ActivitiesComponent } from './activities.component';
import { BackendService } from '../backend.service';
import { DateFormat } from '../custom/customDatePipe';
import { Activity } from '../models/Activity';

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [BackendService, DateFormat]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset activity to an empty activity', () => {
    component.resetFields();
    fixture.detectChanges();
    expect(component.activity).toEqual(new Activity({}));
  });

  it('should retrieve all activities', () => {
    pending();
  });

  it('should retrieve one activity when given an id', () => {
    pending();
  });

  it('should save a new activity', () => {
    pending();
  });

  it('should update an activity', () => {
    pending();
  });

  it('should delete an activity when given the id', () => {
    pending();
  });
});
