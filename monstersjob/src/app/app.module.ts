import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogRef } from '@angular/material/dialog';
import { MaterialDesignModule } from './material-design/material-design.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoPlayerModule } from './videoplayer/videoplayer.module';
import { VideoListComponent } from './video-list/video-list.component';
import { HomeComponent } from './home/home.component';
import { MusicFilterComponent } from './modals/music-filter/music-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    HomeComponent,
    MusicFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    VideoPlayerModule,
    MaterialDesignModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  entryComponents: [
    MusicFilterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
