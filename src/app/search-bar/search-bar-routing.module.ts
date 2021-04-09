import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  {
    path:'',
    component:SearchBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBarRoutingModule { }
