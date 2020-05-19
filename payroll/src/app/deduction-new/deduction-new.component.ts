import { Component, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

interface DeductionNew {
}

@Component({
  selector: 'deduction-new',
  templateUrl: './deduction-new.component.html',
  styleUrls: ['./deduction-new.component.css']
})
export class DeductionNewComponent {


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DeductionNewDialog, {
      width: '10cm',height:'30ch',
      data: {
        
      }
    });
  }
}
@Component({
  selector: 'deduction-new-dialog',
  templateUrl: 'deduction-new-dialog.html',
})
export class DeductionNewDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DeductionNew) {}

}

