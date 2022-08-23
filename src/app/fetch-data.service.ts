import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Data {
  type: string;
  id: string;
  url: string;
  title: string;
  embed_url: string;
  images: any;
}

export interface ResultData<T> {
  data: T[]
  meta: any;
  pagination: any
}

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private httpClient: HttpClient) { }

  fetch(query: any) {
    const url = 'http://api.giphy.com/v1/gifs/search';
    return this.httpClient.get<ResultData<Data>>(url, { params: { api_key: environment.giphyApiKey, ...query } });
  }

}
