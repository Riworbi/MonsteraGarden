import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Plant } from '../model/plant';

@Injectable({
  providedIn: 'root',
})
export class ControllerService implements OnInit {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {}

  TOKEN: string = 'token=gse2zGv9x_MDsOuWa6PiBLxyh3RZxqs97ITNL-5fegc';

  public getTrefle(): Observable<Plant[]> {
    return this.http
      .get('/api?' + this.TOKEN + '&q=monstera')
      .pipe(
        map((fetch: any) =>
          fetch.data.map(
            (item: any) =>
              new Plant(
                item.id,
                item.slug,
                item.scientific_name,
                item.image_url,
                item.family
              )
          )
        )
      );
  }
}
