import { Component, OnDestroy, OnInit, Signal, WritableSignal } from '@angular/core';
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
export class CategoryListComponent implements OnInit{

  categories!: WritableSignal<any[]>;
  private addCategorySubscription?: Subscription;
  
  constructor(
    private _categoryService: CategoryService
  ) {

  }
  ngOnInit(): void {
    this.addCategorySubscription = this._categoryService.getCategories()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
        console.log("Successful call", data);
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

