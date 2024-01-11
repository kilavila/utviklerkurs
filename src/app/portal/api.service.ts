import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';
import { environment as env } from '../constants';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor() { }

  serverStatus(): AxiosPromise {
    return axios.get(env.url);
  }

}
