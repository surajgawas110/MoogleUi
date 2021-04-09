import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StoringService } from 'src/app/services/storing.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private httpService:HttpService,
    private storageService:StoringService,
    private router:Router) { }

  //=============== variables =================
  matchedList:any=[];
  selectedSearchedList:any=[];
  boolValuesPresent=false;
  //===========================================
  ngOnInit(): void {
  }
  getListOfRecommendations(val:any){
    if(val.value == ""){
      this.boolValuesPresent=false;
      this.matchedList=[];
      
    }
    else{
      let newValue=this.removeEscapeCharacters(val.value);
      this.httpService.getCall("search/"+newValue).subscribe(res=>{
        if(res){
          this.matchedList=res;
          if(this.matchedList.length > 0){
            this.boolValuesPresent=true;
          }
          else{
            this.boolValuesPresent=false;
          }
          this.matchedList.sort(function (a, b) {
            return a.localeCompare(b);
          });
          var uniqueList=this.matchedList.filter((v,i,a)=>a.indexOf(v)===i);
          this.matchedList=uniqueList;
        }
      })
    }
  }
  searchButtonClicked(val:any){
    let newValue=this.removeEscapeCharacters(val);
    let dataToSend={
      keywords:newValue,
      pageNumber:1
    }
    if(val==""){
      alert("Enter value to Search")
    }
    else{
      this.httpService.postCall("search",dataToSend).subscribe(res=>{
        if(res){
          this.selectedSearchedList=res;
          this.storageService.store("PAGE_1_DATA",this.selectedSearchedList).then(result=>{
            if(result){
              this.router.navigate(['content',{keyword:newValue}]);
            }
          })
        }
      })
    }
  }
  removeEscapeCharacters(val:string):any{
    let newString=val;
    newString=newString.replace(/,/g,'');
    newString=newString.replace(/\./g,'');
    return newString;
  }
}
