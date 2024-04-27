import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../features/category/services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CategoryResponse } from '../../../features/category/models/Responses/category-response.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy{

  private _getCategorySubscription?: Subscription;

  getCategoryRequest: string;
  modelResponse!: CategoryResponse;

  constructor (
    private _categoryService: CategoryService,
    private _fb: FormBuilder
  ){
    this.getCategoryRequest = ''
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this._getCategorySubscription = this._categoryService.getCategory(this.getCategoryRequest)
    .subscribe({
      next: (response) => {
        this.modelResponse = response;
        console.log("Successful search!", response);
      },
      error: (error) => console.log("Fail to search category", error)
    });
  }

  ngOnDestroy(): void {
    this._getCategorySubscription?.unsubscribe()
  }
}
