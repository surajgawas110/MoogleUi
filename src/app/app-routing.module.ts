import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./search-bar/search-bar.module').then(m => m.SearchBarModule)
  },
  {
    path:'content',
    loadChildren: () => import('./content-bar/content-bar.module').then(m => m.ContentBarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
