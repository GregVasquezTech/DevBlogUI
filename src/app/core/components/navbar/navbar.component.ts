import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryNameRequest } from '../../../features/category/models/categoy-name-request.model';
import { CategoryService } from '../../../features/category/services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy{

  private _addCategorySubscription?: Subscription;

  model: CategoryNameRequest;

  searchForm = this._fb.nonNullable.group({
    model: ''
  })

  constructor (
    private _categoryService: CategoryService,
    private _fb: FormBuilder
  ){
    this.model = {
      name: ''
    }
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this._addCategorySubscription = this._categoryService.getCategory(this.model)
    .subscribe({
      next: (response) => console.log("Successful search!", response),
      error: (error) => console.log("Fail to search category", error)
    });
  }

  ngOnDestroy(): void {
    this._addCategorySubscription?.unsubscribe()
  }

}
