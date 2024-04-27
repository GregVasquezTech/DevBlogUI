import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CategoryResponse } from '../models/Responses/category-response.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  modelResponse!: CategoryResponse[];
  private addCategorySubscription?: Subscription;
  
  constructor(
    private _categoryService: CategoryService
  ) {
  }
  ngOnInit(): void {
    this.addCategorySubscription = this._categoryService.getCategories()
    .subscribe({
      next: (data) => {
        this.modelResponse = data;
        console.log("Successful call", data);
        console.log("successfully added to array:", this.modelResponse);
      },
      error: (error) => {
        console.log("Failed to add new category", error);
      }
    });
  }
}

