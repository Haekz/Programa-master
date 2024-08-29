import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'recipe',
    loadComponent: () => import('./recipe/recipe.page').then( m => m.RecipePage)
  },
  {
    path: 'ingredients',
    loadComponent: () => import('./ingredients/ingredients.page').then( m => m.IngredientsPage),
  },
];
