import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  searchName!: any;
  @Output() searchOutput = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

}