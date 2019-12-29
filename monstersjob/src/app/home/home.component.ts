import { Component, OnInit } from '@angular/core';
import { ListingService } from '../models/listing.service';
import { Video } from '../models/video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];
  displayedColumns: string[] = [];

  constructor(
    private listingService: ListingService,
    private router: Router
    ) { }

  ngOnInit() {

    this.listingService.getVideoListingSubscription().subscribe(
      (data) => {
        if (data) {
          this.displayedColumns = ['title', 'band', 'venue'];
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

  rowClick(row: Video) {
    this.router.navigate([`/video/${row.id}`]);
    console.log(row);
  }

}
