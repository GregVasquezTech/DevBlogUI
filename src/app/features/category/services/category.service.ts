import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/Requests/add-category-request.model';
import { CategoryNameRequest } from '../models/Requests/categoy-name-request.model';
import { CategoryResponse } from '../models/Responses/category-response.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { 

  }

  getCategories(): Observable<CategoryResponse[]> {
    return this._http.get<CategoryResponse[]>('https://localhost:44354/api/DevBlog');
  }

  getCategory(model: CategoryNameRequest): Observable<CategoryResponse> {
    return this._http.get<CategoryResponse>(`https://localhost:44354/api/DevBlog/${model}`);
  }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this._http.post<void>('https://localhost:44354/api/DevBlog', model );
  }

  updateCategory(model: CategoryNameRequest): Observable<void> {
    return this._http.put<void>(`https://localhost:44354/api/DevBlog/${model}`, model);
  }

  deleteCategory(model: CategoryNameRequest): Observable<void> {
    return this._http.delete<void>(`https://localhost:44354/api/DevBlog/${model}`);
  }

}
