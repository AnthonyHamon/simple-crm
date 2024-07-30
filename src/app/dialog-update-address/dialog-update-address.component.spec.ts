import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateAddressComponent } from './dialog-update-address.component';

describe('DialogUpdateAddressComponent', () => {
  let component: DialogUpdateAddressComponent;
  let fixture: ComponentFixture<DialogUpdateAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUpdateAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUpdateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
