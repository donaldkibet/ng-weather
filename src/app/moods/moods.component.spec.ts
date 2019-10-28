import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { MoodsComponent } from './moods.component';
import { BackendService } from '../backend.service';
import { DateFormat } from '../custom/customDatePipe';

describe('MoodsComponent', () => {
  let component: MoodsComponent;
  let fixture: ComponentFixture<MoodsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ MoodsComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [BackendService, DateFormat]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all moods', () => {
    pending();
  });

  it('should get mood when given the id', () => {
    pending();
  });

  it('should save a new mood', () => {
    pending();
  });

  it('should update a mood when given the update mood object', () => {
    pending();
  });

  it('should delete a mood when given the mood to delete object', () => {
    pending();
  });

});
