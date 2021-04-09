import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StoringService } from 'src/app/services/storing.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {

  //=============== demo data =================
  selectedItems:any=[];
  boolFirstPage=true;
  boolLastPage=false;
  pageNumber=1;
  keyword="";
  totalRows:number=0;
  totalPages:number=0;
  boolShowNoResultFoundMessage=false;
//===========================================
  constructor(private storageService:StoringService,
    private httpService:HttpService,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location) { }

  ngOnInit(): void {
    this.keyword=this.route.snapshot.params['keyword'];
    if(this.pageNumber==1){
      this.storageService.get("PAGE_1_DATA").then(res=>{
        if(res){
          if(res.pages == "0"){
            this.boolShowNoResultFoundMessage=true;
          }
          else{
            this.totalRows=parseInt(res.pages);
            this.calculateTotalNumberOfPages();
            this.selectedItems=res.moogles;
          }
        }
      })
    }
    else{
      this.storageService.get("PAGE_DATA").then(res=>{
        if(res){
          this.totalRows=parseInt(res.pages);
          this.calculateTotalNumberOfPages();
          this.selectedItems=res.moogles;
        }
      })
    }
    if(this.pageNumber==this.totalPages){
      this.boolLastPage=true;
    }
  
  }
  calculateTotalNumberOfPages(){
    let pages1=Math.floor(this.totalRows/10);
    if(this.totalRows%10 > 0){
      this.totalPages=Number(pages1)+1;
    }
    else{
      this.totalPages=pages1; 
    }
  }
  goToPreviousPage(){
    this.pageNumber=this.pageNumber-1;
    let dataToSend={
      keywords:this.keyword,
      pageNumber:this.pageNumber
    }
    this.httpService.postCall("search",dataToSend).subscribe((res:any)=>{
      if(res){
        this.selectedItems=res.moogles;
        this.storageService.store("PAGE_DATA",res).then(result=>{
          if(result){
            this.ngOnInit();
          }
        })
      }
    })
    window.scrollTo(0,0);
  }
  goToNextPage(){
    this.boolFirstPage=false;
    this.pageNumber=this.pageNumber+1;
    let dataToSend={
      keywords:this.keyword,
      pageNumber:this.pageNumber
    }
    this.httpService.postCall("search",dataToSend).subscribe((res:any)=>{
      if(res){
        this.selectedItems=res.moogles;
        this.storageService.store("PAGE_DATA",res).then(result=>{
          if(result){
            this.ngOnInit();
          }
        })
      }
    })
    window.scrollTo(0,0);
  }
  goToTheLink(id:any){
    this.httpService.getCall("page/"+id).subscribe(res=>{
      if(res){
        this.storageService.store("PAGE",res).then(result=>{
          if(result){
            this.router.navigate(['/content/page']);
          }
        })
      }
    })
  }
  goBackToSearchPage(){
    this.location.back();
  }
}
