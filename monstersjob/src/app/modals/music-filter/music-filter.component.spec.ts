import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MusicFilterComponent } from './music-filter.component';

describe('MusicFilterComponent', () => {
  let component: MusicFilterComponent;
  let fixture: ComponentFixture<MusicFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MusicFilterComponent
      ],
      imports: [
        MatIconModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA,
          useValue: {
            videos: [],
            setFilteredVideos: () => []
          } },
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
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
