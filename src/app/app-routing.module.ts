import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Main/auth/auth.component';
import { RecipeItemComponent } from './main/content/components/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './Main/Content/Components/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './Main/Content/Components/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RateUsComponent } from './rate-us/rate-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'Recipes', pathMatch: 'full' },
  {
    path: 'Recipes',
    component: RecipeListComponent,
    children: [
      {
        path: '/RecipeItem/:id',
        component: RecipeItemComponent,
      },
    ],
  },
  {
    path: 'ShoppingList',
    component: ShoppingListComponent,
    children: [{ path: 'ShoppingItem/:id' }],
  },
  { path: 'RateUs', component: RateUsComponent },
  { path: 'Auth', component: AuthComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
