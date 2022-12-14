import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkinghoursdetailsComponent } from './workinghoursdetails.component';

describe('WorkinghoursdetailsComponent', () => {
  let component: WorkinghoursdetailsComponent;
  let fixture: ComponentFixture<WorkinghoursdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ WorkinghoursdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkinghoursdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
