import { Component, OnInit } from '@angular/core';
import { ListingService } from '../models/listing.service';
import { Video } from '../models/video';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: any = [];
  video: Video;
  selectedVideo: Video;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService,
    private router: Router
    ) {
      listingService.getVideoListingSubscription().subscribe(
        (data) => {
          if(data) {
            this.videos = data.reverse();
          }
        }
      );
    }

  ngOnInit() {
    // this.videos = this.listingService.getVideos().reverse() ;
    //
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
    //   this.video = this.videos[0];
    // });
  }

  setCurrent = (video: Video) => {
    this.selectedVideo = video;
    this.router.navigate(['/video/', video.id]);
  }



}
