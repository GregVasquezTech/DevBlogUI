import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { CategoryIdRequest } from '../models/categoy-id-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { 

  }

  getCategories(): Observable<void> {
    return this._http.get<void>('https://localhost:44354/api/DevBlog');
  }

  getCategory(model: CategoryIdRequest): Observable<void> {
    return this._http.get<void>(`https://localhost:44354/api/DevBlog/${model}`);
  }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this._http.post<void>('https://localhost:44354/api/DevBlog', model );
  }

  updateCategory(model: CategoryIdRequest): Observable<void> {
    return this._http.put<void>(`https://localhost:44354/api/DevBlog/${model}`, model);
  }

  deleteCategory(model: CategoryIdRequest): Observable<void> {
    return this._http.delete<void>(`https://localhost:44354/api/DevBlog/${model}`);
  }

}
