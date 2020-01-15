import { Component, OnInit, Input } from '@angular/core';
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
  @Input() selectedVideoId?: string;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService,
    private router: Router
    ) {
      listingService.getVideoListingSubscription().subscribe(
        (data) => {
          if(data) {
            this.videos = data.sort(
              (vida, vidb) => {
               if (vida.position < vidb.position) {
                  return 1;
               } else {
                  return -1;
               }
              }
             );
          }
        }
      );
    }

  ngOnInit() {
  }

  setCurrent = (video: Video) => {
    this.selectedVideo = video;
    this.router.navigate(['/video/', video.id]);
  }



}
