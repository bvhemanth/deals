import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../services/getservice.service';
import { SortPipe } from '../shared/sort.pipe';
import { DialogService } from '../services/dialog.service';
import { MapsComponent } from '../maps/maps.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  dealsData :any =[];
  order = "name";
  reverse = false;

  constructor(private _get : GetserviceService,
    private orderPipe: SortPipe,
    private dialogService: DialogService,
    public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this._get.getData().subscribe((response) => {
      console.log(response);
      let resp= response[0];
      this.dealsData=resp;
      console.log(this.dealsData);
      console.log(this.orderPipe.transform(this.dealsData.response, 'name'))
    });  
  }

  showDialogue(data) {
    this.dialogService.open(MapsComponent, {
      width: '500px',
      data: {
        dataKey: data
      }
    })
  }


}
