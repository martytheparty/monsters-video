import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../models/video';
import { ListingService } from '../models/listing.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {

  videos: any = [];
  selectedVideo: Video;
  panelOpen = true;
  loaded = false;
  mediaPath = '';

  constructor(private route: ActivatedRoute, private listingService: ListingService) { }

  ngOnInit() {
    this.mediaPath = environment.mediaUrl;
    this.listingService.getVideoListingSubscription().subscribe(
        (data) => {
          this.videos = data;
          this.loaded = true;
          this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.get('id')) {
              this.selectedVideo = this.videos[0];
            } else if (this.videos.length) {
              this.selectedVideo = this.videos.find((video) => { return (video.id === paramMap.get('id'));});
            }

          });
        }
    );
  }

}
