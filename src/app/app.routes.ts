import { Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AddressComponent } from './components/address/address.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about',component:AboutComponent,children:[
        {path:'address',component:AddressComponent},
    ]},
    {path:'services',component:ServicesComponent},
    {path:'products/:id',component:ProductsComponent},
];
