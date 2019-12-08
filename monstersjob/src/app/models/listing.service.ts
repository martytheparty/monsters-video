import { Injectable } from '@angular/core';
import { Video } from './video';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  videoListing: BehaviorSubject<any> = new BehaviorSubject(false);
  loading = false;

  constructor(private http: HttpClient) { }

  getVideoListingSubscription() {
    if (!this.loading) {
      this.loading = true;
      this.videoListing.subscribe(
        (data) => {
          if(data === false) {
            this.getVideoListing().subscribe(
              (data) => {
                console.log('video listing set');
              }
            );
          }
        }
      );
    }
    return this.videoListing;
  }

  getVideoListing() {
    if (this.loading)  return this.videoListing;

    const today = new Date();
    const day = today.getDay();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    this.loading = true;
    let requestSubject = this.http.get(`assets/videos.json?nocache=${day}${hour}${minutes}`);
    requestSubject.subscribe(
      (data) => {
        this.videoListing.next(data);
      }
    );
    return requestSubject;
  }
}
