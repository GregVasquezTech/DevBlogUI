import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy{

  model: AddCategoryRequest;

  private _addCategorySubscription?: Subscription;

  constructor(
    private _categoryService: CategoryService
  ) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() : void {
    this._addCategorySubscription = this._categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log("Successful call", response);
      },
      error: (error) => {
        console.log("Failed to add new category", error);
      }
    });
  }

  ngOnDestroy(): void {
    this._addCategorySubscription?.unsubscribe();
  }
}
