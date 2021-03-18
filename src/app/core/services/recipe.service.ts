import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(private apiService: ApiService) {}

  getRecipes(): Observable<any> {
    return this.apiService.get(`/recipes`);
  }
}
