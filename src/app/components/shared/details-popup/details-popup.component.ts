import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimes, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsComponent implements OnInit {

  faTimes = faTimes
  faBook = faBook

  title: any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialog) {
    this.title = data.title
  }

  ngOnInit(): void { }

  onClose(){
    this.dialogRef.closeAll()
  }

}