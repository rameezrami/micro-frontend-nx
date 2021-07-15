import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HeaderApiService {

  constructor(private http: HttpClient) { }

  getHeaderData(){
    return this.http.get('https://api.github.com/users/rameezrami/repos')
  }

  getNotes(loanNumber:any = null){
    return this.http.get('https://api.github.com/users/rameezrami/repos')
  }
}
