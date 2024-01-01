import { Injectable } from '@angular/core';

declare var L: any;

@Injectable({
  providedIn: 'root'
})
export class LeafletService {

  map: any = L.map;
  tileLayer: any = L.tileLayer;
  svgOverlay: any = L.svgOverlay;
  latLngBounds: any = L.latLngBounds;
  polyline: any = L.polyline;
  popup: any = L.popup;
  Browser: any = L.Browser;

  constructor() {}

}
