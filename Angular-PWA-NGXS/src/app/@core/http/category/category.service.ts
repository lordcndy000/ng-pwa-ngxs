import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@core/model/common/apiResponse';
import { Category } from '@core/model/category/category';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = environment.apiResources.main.apiUrl;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  loadAll(): Observable<Category[]> {
    return this.http.get<ApiResponse<Category[]>>(`${this.apiUrl}/category`)
      .pipe(
        takeUntil(this.destroy$),
        map(x => x.Result)
      );
  }
}
