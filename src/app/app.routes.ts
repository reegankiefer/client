import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SortedByFamilyComponent } from './sorted-by-family/sorted-by-family.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'products', component: AllProductsComponent},
    {path: 'categories/family', component: SortedByFamilyComponent},
    {path: 'categories/family/product', component: ProductPageComponent},
    {path: 'admin/login', component: AdminLoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/edit', component:EditComponent},
    {path: 'admin/add', component:AddComponent},
];
