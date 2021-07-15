import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MotherApiService {

  constructor(private http: HttpClient) { }

  getMotherData(){
    return this.http.get('https://api.github.com/users/rameezrami/repos')
  }
}
