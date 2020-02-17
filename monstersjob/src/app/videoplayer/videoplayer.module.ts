// import the new component
import { NgModule } from '@angular/core';
import { VideoplayerComponent } from './videoplayer.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    VideoplayerComponent
  ],
})

export class VideoPlayerModule { }
