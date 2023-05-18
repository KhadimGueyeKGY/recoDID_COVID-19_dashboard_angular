import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body-contain',
  templateUrl: './body-contain.component.html',
  styleUrls: ['./body-contain.component.css']
})
export class BodyContainComponent implements OnInit {
  private json_file: string = "assets/data/samples.json"
  data : any

  constructor(private http: HttpClient) {
    this.http.get(this.json_file).subscribe(data => {
      this.data = data;
    });
  }

  

  

  ngOnInit() {
  }

}
