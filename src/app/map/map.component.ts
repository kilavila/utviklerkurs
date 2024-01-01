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
  building: any;
  popup: any;
  mapOptions = {
    init: {
      attributionControl: true, // WARNING: Attribution must be included in the map!
      zoomControl: true,
      scrollWheelZoom: false,
      touchZoom: true,
      maxBounds: [[-90, -180], [90, 180]], // INFO: Max bounds of world
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
    this.initializeVectorLayers();
    this.initializePopup();
  }

  // INFO: Load map
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
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      minZoom: this.mapOptions.zoom.min,
      maxZoom: this.mapOptions.zoom.max,
    }).addTo(this.map);
  }

  // INFO: Add vector layers
  initializeVectorLayers() {
    let buildingLatLng = [
      [60.37890341908291, 5.343062281608582],
      [60.378933910489565, 5.343782454729081],
      [60.37888353336756, 5.343791842460632],
      [60.37888519051098, 5.343845486640931],
      [60.37882255043143, 5.34385621547699],
      [60.37882155614348, 5.343846157193185],
      [60.37880399038474, 5.343850180506707],
      [60.37880299609622, 5.343805924057961],
      [60.37878045888175, 5.343809947371484],
      [60.37874996733149, 5.343089103698731],
      [60.37890341908291, 5.343062281608582],
    ];

    this.building = this.leaflet.polyline(
      buildingLatLng,
      {
        weight: 2,
        fill: true,
        color: 'oklch(var(--n))',
        fillColor: 'oklch(var(--in))',
        fillOpacity: 0.5,
      }
    ).addTo(this.map);
  }

  // INFO: Add popup
  initializePopup() {
    this.popup = this.leaflet.popup()
      .setLatLng([this.mapOptions.coordinates.lat, this.mapOptions.coordinates.lng])
      .setContent(`
        <div class="text-center">
          <span class="text-lg">
            ALF AS HOVEDKONTOR
          </span>
        </div>

        <div class="divider m-0 mb-1 p-0"></div>

        <ul>
          <li class="flex justify-between">
            <span class="text-left font-bold">Adresse:</span>
            <span class="text-right">Klaus Hanssens vei 22</span>
          </li>
          <li class="flex justify-between">
            <span class="text-left"></span>
            <span class="text-right">5053 Bergen</span>
          </li>
          <li class="flex justify-between mt-2">
            <span class="text-left font-bold">Åpningstid:</span>
            <span class="text-right">08:00 - 15:00</span>
          </li>
          <li class="flex justify-between mt-2">
            <span class="text-left font-bold">Telefon:</span>
            <span class="text-right">+47 55 54 11 50</span>
          </li>
          <li class="flex justify-between">
            <span class="text-left font-bold">E-post:</span>
            <span class="text-right">alf@alf.no</span>
          </li>
        </ul>
      `)
      .openOn(this.map);
  }

}
