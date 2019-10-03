import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../services/getservice.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  dealsData :any =[];

  constructor(private _get : GetserviceService) { }

  ngOnInit() {
    this._get.getData().subscribe((response: Response) => {
      console.log(response);
      let resp= response;
      this.dealsData=resp;
    });  
  }

}
