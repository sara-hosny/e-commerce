import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegiesterComponent } from './pages/regiester/regiester.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoreisComponent } from './pages/categoreis/categoreis.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductComponent } from './pages/product/product.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:"",component:AuthLayoutComponent,title:'auth',children:[
        { path: "login", canActivate:[loggedGuard],loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent), title: 'login' },
        { path: "register", canActivate:[loggedGuard], loadComponent: () => import('./pages/regiester/regiester.component').then((c) => c.RegiesterComponent), title: 'register' },
        { path: "forget", canActivate:[loggedGuard], loadComponent: () => import('./pages/forget-pass/forget-pass.component').then((c) => c.ForgetPassComponent), title: 'forget-pass' }

    ]},
    {path:"",component:BlankLayoutComponent,title:'blank',children:[
     {path:"home",canActivate:[authGuard],loadComponent:()=>import('./pages/home/home.component').then((c)=>c.HomeComponent),title:'home'},
     {path:"cart",canActivate:[authGuard],loadComponent:()=>import('./pages/cart/cart.component').then((c)=>c.CartComponent),title:'cart'},
     {path:"brand",canActivate:[authGuard],loadComponent:()=>import('./pages/brand/brand.component').then((c)=>c.BrandComponent),title:'brand'},
     { path: "categories",canActivate:[authGuard], loadComponent: () => import('./pages/categoreis/categoreis.component').then((c) => c.CategoreisComponent), title: 'categories' },
     { path: "detailes/:id",canActivate:[authGuard], loadComponent: () => import('./pages/details/details.component').then((c) => c.DetailsComponent), title: 'detailes' },
     { path: "product",canActivate:[authGuard], loadComponent: () => import('./pages/product/product.component').then((c) => c.ProductComponent), title: 'product' },
     { path: "checkout/:id",canActivate:[authGuard], loadComponent: () => import('./pages/checkout/checkout.component').then((c) => c.CheckoutComponent), title: 'checkout' },
     { path: "allorders",canActivate:[authGuard], loadComponent: () => import('./pages/allorders/allorders.component').then((c) => c.AllordersComponent), title: 'allorders' },

     { path: "**",canActivate:[authGuard], loadComponent: () => import('./pages/notfound/notfound.component').then((c) => c.NotfoundComponent), title: 'Not found' }
    ]},

    
];
