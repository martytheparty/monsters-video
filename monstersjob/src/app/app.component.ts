import { Component } from '@angular/core';
import { Video } from './models/video';
import { ListingService } from './models/listing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedVideo: Video;
  videos: any = [];

  constructor(listingService: ListingService) {
    listingService.getVideoListing().subscribe(
      (data) => {
        this.videos = data;
      }
    );

  }
}
