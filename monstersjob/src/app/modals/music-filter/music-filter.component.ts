import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-music-filter',
  templateUrl: './music-filter.component.html',
  styleUrls: ['./music-filter.component.css']
})
export class MusicFilterComponent implements OnInit {
  bands = [];
  selectedBands = {};
  venues = [];
  selectedVenues = {};
  songs = [];
  selectedSongs = {};

  constructor(
    private dialogRef: MatDialogRef<MusicFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const bandListing = this.data.videos.map( video => video.band );
    this.bands = [...new Set(bandListing)];
    const venueListing = this.data.videos.map( video => video.venue );
    this.venues = [...new Set(venueListing)];
    const songListing = this.data.videos.map( video => video.title );
    this.songs = [...new Set(songListing)].sort();
    this.data.filteredVideos = [];
    this.executeFilters();
  }

  selectBand(band) {
    if (this.selectedBands[band]) {
      this.selectedBands[band] = false;
    } else {
      this.selectedBands[band] = true;
    }
    this.executeFilters();
  }

  selectVenue(venue) {
    if (this.selectedVenues[venue]) {
      this.selectedVenues[venue] = false;
    } else {
      this.selectedVenues[venue] = true;
    }
    this.executeFilters();
  }

  selectSong(song) {
    if (this.selectedSongs[song]) {
      this.selectedSongs[song] = false;
    } else {
      this.selectedSongs[song] = true;
    }
    this.executeFilters();
  }

  getVideosForBandFilter() {
    const indices = [];
    for (const key in this.selectedBands) {
      if (this.selectedBands.hasOwnProperty(key)) {
        const band = this.selectedBands[key];
        if (band) {
          this.data.videos.forEach(
            (video, index) => {
              if (video.band === key) {
                indices.push(index);
              }
            }
          );
        }
      }
    }
    return indices;
  }

  getVideosForVenueFilter() {
    const indices = [];
    for (const key in this.selectedVenues) {
      if (this.selectedVenues.hasOwnProperty(key)) {
        const venue = this.selectedVenues[key];
        if (venue) {
          this.data.videos.forEach(
            (video, index) => {
              if (video.venue === key) {
                indices.push(index);
              }
            }
          );
        }
      }
    }
    return indices;
  }

  getVideosForSongFilter() {
    const indices = [];
    for (const key in this.selectedSongs) {
      if (this.selectedSongs.hasOwnProperty(key)) {
        const song = this.selectedSongs[key];
        if (song) {
          this.data.videos.forEach(
            (video, index) => {
              if (video.title === key) {
                indices.push(index);
              }
            }
          );
        }
      }
    }
    return indices;
  }

  executeFilters() {
    this.data.filteredVideos = [];
    const indices = [
      ...this.getVideosForBandFilter(),
      ...this.getVideosForSongFilter(),
      ...this.getVideosForVenueFilter()
    ];

    /* remove duplicates */
    indices.splice(0, indices.length, ...(new Set(indices)));
    indices.forEach(
      ( index ) => {
        this.data.filteredVideos.push(this.data.videos[index]);
      }
    );

    this.data.setFilteredVideos(this.data.filteredVideos);
  }

  filteredCount() {
    if (this.data.filteredVideos.length > 0) {
      return this.data.filteredVideos.length;
    } else {
      return this.data.videos.length;
    }
  }

  close() {
    console.log('close');
    this.dialogRef.close();
  }

}
