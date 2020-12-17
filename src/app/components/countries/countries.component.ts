import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any = [];

  constructor( private http:HttpClient ) { 
    
  }

  
  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( coun => this.countries = coun );
  }

  // this method is executed when a element is dropped
  drop( event: CdkDragDrop<any>){
    // this method was programed for movieng elemnts in an array using drag and drop
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);

  }

}
