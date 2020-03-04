import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.sass']
})
export class SearchButtonComponent implements OnInit {
  @Output() nameSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  parentSearch(){
    this.nameSearch.emit();
  }

}
