import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ChangelistPipe } from '../allpipes/changelist.pipe';

@NgModule({
  declarations: [SearchBoxComponent,ChangelistPipe],
  imports: [
    CommonModule,
    SearchBarRoutingModule
  ]
})
export class SearchBarModule { }
