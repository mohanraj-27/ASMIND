import { Component, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';


interface ListNew {
}

@Component({
  selector: 'list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent {
  value="Male";

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ListNewDialog, {
      width: '15cm',height:'70ch',
      data: {
        
      }
    });
  }
}
@Component({
  selector: 'list-new-dialog',
  templateUrl: 'list-new-dialog.html',
})
export class ListNewDialog {
  selector="male";

 

  constructor(@Inject(MAT_DIALOG_DATA) public data: ListNew) {}

}