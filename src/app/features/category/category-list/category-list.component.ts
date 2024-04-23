import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit, OnDestroy{

  private addCategorySubscription?: Subscription;
  
  constructor(
    private _categoryService: CategoryService
  ) {

  }
  ngOnInit(): void {
    this.addCategorySubscription = this._categoryService.getCategories()
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
    this.addCategorySubscription?.unsubscribe();
  }

}

