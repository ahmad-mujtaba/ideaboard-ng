import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent {

  constructor(public dialogRef: MatDialogRef<NoteDialogComponent>) {}
  note:string='';

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.note);
  }

}
