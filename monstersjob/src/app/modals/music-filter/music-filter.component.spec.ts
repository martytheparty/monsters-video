import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFilterComponent } from './music-filter.component';

describe('MusicFilterComponent', () => {
  let component: MusicFilterComponent;
  let fixture: ComponentFixture<MusicFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
