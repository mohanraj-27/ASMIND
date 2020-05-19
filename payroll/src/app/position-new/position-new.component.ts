import { Component, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

interface PositionNew {
}

@Component({
  selector: 'position-new',
  templateUrl: './position-new.component.html',
  styleUrls: ['./position-new.component.css']
})
export class PositionNewComponent {


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(PositionNewDialog, {
      width: '10cm',height:'30ch',
      data: {
        
      }
    });
  }
}
@Component({
  selector: 'position-new-dialog',
  templateUrl: 'position-new-dialog.html',
})
export class PositionNewDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PositionNew) {}

}


