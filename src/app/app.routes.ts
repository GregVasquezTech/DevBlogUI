import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './features/category/update-category/update-category.component';
import { DeleteCategoryComponent } from './features/category/delete-category/delete-category.component';
import { GetCategoryComponent } from './features/category/get-category/get-category.component';

export const routes: Routes = [
    {
        path: 'admin/categories', component: CategoryListComponent
    },
    {
        path: 'admin/categories/:categoryName', component: GetCategoryComponent
    },
    {
        path: 'admin/categories/add', component: AddCategoryComponent
    },
    {
        path: 'admin/categories/update', component: UpdateCategoryComponent
    },
    {
        path: 'admin/categories/delete', component: DeleteCategoryComponent
    }
];
