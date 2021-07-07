import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './Main/auth/auth.component';
import { ContentComponent } from './Main/content/content.component';
import { ComponentsComponent } from './Main/Content/components/components.component';
import { RecipeListComponent } from './Main/Content/Components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Main/Content/Components/recipe-list/recipe-item/recipe-item.component';
import { AccountComponent } from './Main/account/account.component';

import { ShoppingListComponent } from './Main/Content/Components/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './Main/Content/Components/shopping-list/shopping-list-item/shopping-list-item.component';
import { RateUsComponent } from './rate-us/rate-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthComponent,
    ContentComponent,
    ComponentsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    AccountComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    RateUsComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
