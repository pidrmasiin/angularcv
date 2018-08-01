import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjavaComponent } from './myjava.component';

describe('MyjavaComponent', () => {
  let component: MyjavaComponent;
  let fixture: ComponentFixture<MyjavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
