import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneProjetsComponent } from './milestone-projets.component';

describe('MilestoneProjetsComponent', () => {
  let component: MilestoneProjetsComponent;
  let fixture: ComponentFixture<MilestoneProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestoneProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
