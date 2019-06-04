import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { MenuViewComponent } from './components/menu/menu-view/menu-view.component';
import { MenuAddComponent } from './components/menu/menu-add/menu-add.component';
import { ItemViewComponent } from './components/item/item-view/item-view.component';
import { ItemAddComponent } from './components/item/item-add/item-add.component';
import { LayoutComponent } from './components/layout/layout/layout.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: LayoutComponent,
        // canActivate: [AuthGuard],
        children:[
            // Dashboard
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            // Menu
            {
                path: 'menu',
                component: MenuViewComponent
            },
            {
                path: 'menu-add',
                component: MenuAddComponent
            },
            // Item
            {
                path: 'item',
                component: ItemViewComponent
            },
            {
                path: 'item-add',
                component: ItemAddComponent
            },
        ]
    },
    // { path: '', component: DashboardComponent },
    // { path: 'menu', component: MenuViewComponent },
    // { path: 'menu/add', component: MenuAddComponent },
    // { path: 'item', component: ItemViewComponent },
    // { path: 'item/add', component: ItemAddComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }