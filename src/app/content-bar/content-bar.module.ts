import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBarRoutingModule } from './content-bar-routing.module';
import { ContentBoxComponent } from './content-box/content-box.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';


@NgModule({
  declarations: [ContentBoxComponent, ContentDetailComponent],
  imports: [
    CommonModule,
    ContentBarRoutingModule
  ]
})
export class ContentBarModule { }
