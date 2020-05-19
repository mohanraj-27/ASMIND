import { Component, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

interface CashNew {
}

@Component({
  selector: 'cash-new',
  templateUrl: './cash-new.component.html',
  styleUrls: ['./cash-new.component.css']
})
export class CashNewComponent {


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CashNewDialog, {
      width: '15cm',height:'30ch',
      data: {
        
      }
    });
  }
}
@Component({
  selector: 'cash-new-dialog',
  templateUrl: 'cash-new-dialog.html',
})
export class CashNewDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CashNew) {}

}

