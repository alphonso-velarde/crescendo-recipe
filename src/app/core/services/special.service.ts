import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SpecialService {
  constructor(private apiService: ApiService) {}

  getSpecials(): Observable<any> {
    return this.apiService.get(`/specials`);
  }
}
