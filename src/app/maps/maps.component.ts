import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  fromPage;
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.fromPage = this.data.dataKey;
  }

}
