import { Component, OnInit } from '@angular/core';
import { StoringService } from 'src/app/services/storing.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  item:any={};
  constructor(private storageService:StoringService) { }

  ngOnInit(): void {
    this.storageService.get("PAGE").then(res=>{
      if(res){
        this.item=res;
      }
    })
  }

}
