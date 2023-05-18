import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-id-contain',
  templateUrl: './id-contain.component.html',
  styleUrls: ['./id-contain.component.css']
})

export class IdContainComponent {
  res_id : any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  data : any
  private json_file: string = "assets/data/samples.json"

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.res_id = params.get('id');
    });
    this.http.get(this.json_file).subscribe(data => {
      this.data = data;
    });
  }
  

}
