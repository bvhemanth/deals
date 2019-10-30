import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  stack: MatDialogRef<any>[] = [];

  constructor(private dialog: MatDialog) { }

  open(content: any, config: MatDialogConfig = {}): MatDialogRef<any> {
    console.log(content)
    console.log(config);
    const dialog = this.dialog.open(content, config);

    this.stack.push(dialog);

    return dialog;
  }

}
