import { Component, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClientService} from '../service/httpclient.service';

interface AddNew {
}

@Component({
  selector: 'add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {



  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddNewDialog, {
      width: '45ch',height:'45ch',
      data: {
        
      }
    });
  }
}
@Component({
  selector: 'add-new-dialog',
  templateUrl: 'add-new-dialog.html',
})
export class AddNewDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: AddNew) {}



}