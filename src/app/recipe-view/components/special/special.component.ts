import { Component, Input, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
@Component({
  selector: 'special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.styl']
})
export class SpecialComponent implements OnInit {
  @Input() specials;
  specialLength: any;
  zoom:number = 8;
  constructor() {}

  ngOnInit(): void {
    this.specialLength = this.specials.length;
  }

  getLatlong(data, index){
    return parseFloat(data.split(',')[index]);
  }
}
