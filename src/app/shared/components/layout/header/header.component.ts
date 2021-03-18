import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { AppState } from 'src/app/core/ngrx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
}
