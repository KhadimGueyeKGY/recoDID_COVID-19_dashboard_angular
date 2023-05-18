import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-body-id',
  templateUrl: './body-id.component.html',
  styleUrls: ['./body-id.component.css']
})

export class BodyIdComponent implements OnInit {
  
  
  private json_file: string = "assets/data/samples.json"
  data : any
  matchingIds: string[] = [];
  matchingIds_res: string[] = [];
  Biosamples_len : number ;




  constructor(private http: HttpClient) {
    this.http.get(this.json_file).subscribe(data => {
      this.data = data;
      for (let i = 0; i < this.data.length; i++) {
        this.matchingIds.push(this.data[i].accession);
      }
    });
    this.matchingIds_res = this.matchingIds
    this.Biosamples_len = this.matchingIds_res.length
  }
  
  
  async ngOnInit() {

  }
  
  
  value : any
  
  onInput(value: any) {
    
    if (this.value ==''){
      this.matchingIds_res = this.matchingIds
      this.Biosamples_len = this.matchingIds_res.length
    }
    else{
        this.matchingIds_res = this.matchingIds.filter(x => x.includes(this.value));
        this.Biosamples_len = this.matchingIds_res.length
    }
    
  }
  
  public getData(): any[]{
    return this.data ;
  }
  public getMatchingIdsRes (): any[]{
    return this.matchingIds_res;
  }


}


