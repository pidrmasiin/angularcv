import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolaComponent } from './demola.component';

describe('DemolaComponent', () => {
  let component: DemolaComponent;
  let fixture: ComponentFixture<DemolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
