import { Component, OnInit } from '@angular/core';
import { ListingService } from '../models/listing.service';
import { Video } from '../models/video';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MusicFilterComponent } from '../modals/music-filter/music-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dialogRef: MatDialogRef<MusicFilterComponent>;
  videos: Video[] = [];
  filteredVideos: Video[] = [];
  displayedColumns: string[] = [];

  constructor(
    private listingService: ListingService,
    private router: Router,
    public dialog: MatDialog
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
  }

  filterClick() {
    const dialogRef = this.dialog.open(MusicFilterComponent, {
      width: '400px',
      data: {
        videos: this.videos,
        filteredVideos: this.filteredVideos,
        setFilteredVideos: (videos) => {
          this.filteredVideos = videos;
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });


  }

  getVideos() {
    let videos = this.videos;
    if (this.filteredVideos.length > 0) {
      videos = this.filteredVideos;
    }
    return videos;
  }

}
