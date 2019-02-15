import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class TracksService {

  constructor(private httpClient: HttpClient) {
  }

  getTracks() {
    const url = 'http://back.cb18039.tmweb.ru/web/';
    return this.httpClient.get(url);
  }

}
