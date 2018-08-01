import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjavascriptComponent } from './myjavascript.component';

describe('MyjavascriptComponent', () => {
  let component: MyjavascriptComponent;
  let fixture: ComponentFixture<MyjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
