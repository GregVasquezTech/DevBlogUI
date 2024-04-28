import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  searchValue: string = '';

  searchForm = new FormGroup({
    searchName: new FormControl() 
  });

  getSearchValue(): string {
    let searchName = this.searchForm.get('searchName')?.value;
    console.log(`Input is ${searchName}`);
    return this.searchForm.get('searchName')?.value;
  }
}
