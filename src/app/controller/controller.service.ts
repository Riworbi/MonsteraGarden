import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService implements OnInit {

  http: HttpClient;

  constructor(http: HttpClient) { this.http = http }

  ngOnInit(): void {
  }

  TOKEN: string = 'token=gse2zGv9x_MDsOuWa6PiBLxyh3RZxqs97ITNL-5fegc';

  public getTrefle(): Observable<any> {

    return this.http.get('/api?' + this.TOKEN);
  }
}
