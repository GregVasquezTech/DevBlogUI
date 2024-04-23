import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  model: AddCategoryRequest;

  constructor(
    private _categoryService: CategoryService
  ) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() : void {
    this._categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log("Successful call", response);
      },
      error: (error) => {
        console.log("Failed to add new category", error);
      }
    });
  }
}
