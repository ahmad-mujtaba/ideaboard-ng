import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.scss']
})
export class TopicDialogComponent {

  constructor(public dialogRef: MatDialogRef<TopicDialogComponent>) {}
  topicText:string='';

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.topicText);
  }

}
