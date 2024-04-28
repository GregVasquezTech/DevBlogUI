import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryResponse } from '../models/Responses/category-response.model';
import { NavbarComponent } from '../../../core/components/navbar/navbar.component';

@Component({
  selector: 'app-get-category',
  standalone: true,
  imports: [],
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent implements OnInit, OnDestroy{

  modelRequest: string;
  modelResponse: CategoryResponse;

  constructor (
    private _categoryService: CategoryService
  ) {
    this.modelRequest = ''
    this.modelResponse = {
      name: '',
      urlHandle: ''
    }
  };

  ngOnInit(): void {
    this._categoryService.getCategory(this.modelRequest)
    .subscribe({
      next: (response) => {
        this.modelResponse = response;
        console.log("Get Category succeded: ", response);
    },
      error: (error) => console.log("Failed to get category: ", error)
    });
  };
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  };


}
