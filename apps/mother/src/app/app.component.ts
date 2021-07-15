import { Component, OnInit } from '@angular/core';
import { MotherApiService } from './services/mother-api.service';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private motherApiService:MotherApiService
  ){}
  title = 'mother';
  // elementUrl = 'https://cdn.jsdelivr.net/gh/rameezrami/cdn-text/ld-notes.js'
  elementUrl = 'http://127.0.0.1:5500/apps/mother/src/assets/wc/header/app.js'

  repos = []

  ngOnInit(){
    // this.motherApiService.getMotherData().subscribe((repos:any)=>{
    //   console.log(repos)
    //   this.repos = repos
    // })
    console.log('mother run')
  }

}
