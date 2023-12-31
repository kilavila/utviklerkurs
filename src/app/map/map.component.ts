import { Component, OnInit } from '@angular/core';
import { LeafletService } from '../services/leaflet.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  map: any;
  mapOptions = {
    init: {
      attributionControl: false,
      zoomControl: true,
      scrollWheelZoom: false,
      maxBounds: [[-90, -180], [90, 180]], // Max bounds of world
    },
    coordinates: {
      lat: 60.37882942962819,
      lng: 5.343449981094683
    },
    zoom: {
      default: 17,
      min: 10,
      max: 18,
    },
  };

  constructor(
    private leaflet: LeafletService,
  ) { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    this.map = this.leaflet.map('map', this.mapOptions.init);

    this.map.setView(
      [
        this.mapOptions.coordinates.lat,
        this.mapOptions.coordinates.lng
      ],
      this.mapOptions.zoom.default,
    );

    this.leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: this.mapOptions.zoom.min,
      maxZoom: this.mapOptions.zoom.max,
    }).addTo(this.map);

    this.map.on('click', function(event: any) {
      console.log(event.latlng);
    });
  }

}
