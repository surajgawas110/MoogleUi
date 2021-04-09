import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentBoxComponent } from './content-box/content-box.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  // {
  //   path:'',
  //   children :[
  //     {
  //       path:'',
  //       component:ContentBoxComponent
  //     } 
  //   ]
  // },
  {
    path:'',
    component:ContentBoxComponent
  },
  {
    path:'page',
    component:ContentDetailComponent
  }
  
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentBarRoutingModule { }
