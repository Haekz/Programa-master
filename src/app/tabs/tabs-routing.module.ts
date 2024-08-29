import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'recipe',
        loadChildren: () =>
          import('../recipe/recipe.module').then((m) => m.RecipePageModule),
      },
      {
        path: 'ingredients',
        loadChildren: () =>
          import('../ingredients/ingredients.module').then((m) => m.IngredientsPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/search',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
