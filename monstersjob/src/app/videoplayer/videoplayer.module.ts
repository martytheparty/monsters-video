// import the new component
import { NgModule } from '@angular/core';
import { VideoplayerComponent } from './videoplayer.component';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [
    VideoplayerComponent
  ],
})

export class VideoPlayerModule { }
