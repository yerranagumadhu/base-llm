import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevextComponent } from './devext.component';

describe('DevextComponent', () => {
  let component: DevextComponent;
  let fixture: ComponentFixture<DevextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
