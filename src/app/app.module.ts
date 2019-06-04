import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { MenuViewComponent } from './components/menu/menu-view/menu-view.component';
import { ItemViewComponent } from './components/item/item-view/item-view.component';
import { ItemAddComponent } from './components/item/item-add/item-add.component';
import { MenuAddComponent } from './components/menu/menu-add/menu-add.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { MenuEditComponent } from './components/menu/menu-edit/menu-edit.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { LoginComponent } from './components/no-auth/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MenuViewComponent,
        ItemViewComponent,
        ItemAddComponent,
        MenuAddComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        LayoutComponent,
        MenuEditComponent,
        ItemEditComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
