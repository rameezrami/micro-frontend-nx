import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NotesFacade } from './+state/notes.facade';
import { NoteItem } from './+state/notes.models';
import { HeaderApiService } from './services/header-api.service';
export const APP_TAG = 'mf-header'
@Component({
  selector: APP_TAG,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit,OnChanges{
  constructor(
    private headerApiService:HeaderApiService,
    private notesFacade:NotesFacade,
    private cd: ChangeDetectorRef
  ){}
  notes:NoteItem[] = []
  notesLoading = false
  notesLoaded = false
  
  ngOnInit(){
    console.log(123)

    // this.headerApiService.getHeaderData().subscribe(repos=>{
    //   console.log(repos)
    //   this.repos = repos
    //   this.cd.detectChanges()
    // })

    this.notesFacade.loadNotes('111')
    this.notesFacade.notes$.subscribe((notes:any)=>{
      console.log('notes data',notes)
      this.notes = notes
      this.cd.detectChanges()
    })
    this.notesFacade.notesLoading$.subscribe((status:any)=>{
      console.log('notesLoading status:',status)
      this.notesLoading = status
    })
    this.notesFacade.notesloaded$.subscribe((status:any)=>{
      console.log('notesLoaded status:',status)
      this.notesLoaded = status
    })

  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }
  
  test(){
    console.log('worked')
  }
}
