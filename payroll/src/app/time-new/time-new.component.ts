import { Component, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

interface TimeNew {
}

@Component({
  selector: 'time-new',
  templateUrl: './time-new.component.html',
  styleUrls: ['./time-new.component.css']
})
export class TimeNewComponent {


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(TimeNewDialog, {
      width: '10cm',height:'55ch',
      data: {
        
      }
    });
  }
}
@Component({
  selector: 'time-new-dialog',
  templateUrl: 'time-new-dialog.html',
})
export class TimeNewDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TimeNew) {}

}
