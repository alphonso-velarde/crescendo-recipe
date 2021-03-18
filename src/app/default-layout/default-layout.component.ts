import {Component, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.styl']
})
export class DefaultLayoutComponent implements OnInit{
  constructor( private router: Router) {}

  ngOnInit(): void {
  }
}
