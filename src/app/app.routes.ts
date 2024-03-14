import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DonutDetailComponent } from './components/donut-detail/donut-detail.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"Donut", redirectTo: "", pathMatch: "full"},
    {path:"Donut/:id", component: DonutDetailComponent},
    {path:"Cart", component: CartComponent}

];
