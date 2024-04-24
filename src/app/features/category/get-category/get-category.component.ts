import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryNameRequest } from '../models/categoy-name-request.model';

@Component({
  selector: 'app-get-category',
  standalone: true,
  imports: [],
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent implements OnInit, OnDestroy{

  model: CategoryNameRequest;

  constructor (
    private _categoryService: CategoryService
  ) {
    this.model = {
      name: ''
    };
  };

  ngOnInit(): void {
    this._categoryService.getCategory(this.model)
    .subscribe({
      next: (response) => console.log("Get Category succeded", response),
      error: (error) => console.log("Failed to get category", error)
    });
  };
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  };


}
