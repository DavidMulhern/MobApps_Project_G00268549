import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./thesaurus/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'dictionary',
    loadChildren: () => import('./dictionary/dictionary.module').then( m => m.DictionaryPageModule)
  },
  {
    path: 'nightlight',
    loadChildren: () => import('./nightlight/nightlight.module').then( m => m.NightlightPageModule)
  },
  {
    path: 'save-def',
    loadChildren: () => import('./save-def/save-def.module').then( m => m.SaveDefPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
