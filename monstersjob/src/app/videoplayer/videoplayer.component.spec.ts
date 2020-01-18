import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';


import { VideoplayerComponent } from './videoplayer.component';
import { VideoListComponent } from '../video-list/video-list.component';



describe('VideoplayerComponent', () => {
  let component: VideoplayerComponent;
  let fixture: ComponentFixture<VideoplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoplayerComponent,
        VideoListComponent
       ],
      imports: [
        MatIconModule,
        MatCardModule,
        MatChipsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
