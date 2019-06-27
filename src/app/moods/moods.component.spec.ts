import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { MoodsComponent } from './moods.component';
import { BackendService } from '../backend.service';
import { DateFormat } from '../custom/customDatePipe';

describe('MoodsComponent', () => {
  let component: MoodsComponent;
  let fixture: ComponentFixture<MoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodsComponent ],
      imports:[HttpClientTestingModule,FormsModule],
      providers:[BackendService,DateFormat]
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
});
