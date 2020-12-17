import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  /* Catch a reference of any element of html document */
  @ViewChild( CdkVirtualScrollViewport ) myviewport: CdkVirtualScrollViewport;

  persons = Array(500).fill(0);

  constructor() { }


  goEnd(){
    this.myviewport.scrollToIndex( this.persons.length );

  }

  goBegining(){
    this.myviewport.scrollToIndex( 0 );

  }

  goInMiddle(){
    this.myviewport.scrollToIndex( this.persons.length/2 );
  }

  ngOnInit(): void {
  }

}
