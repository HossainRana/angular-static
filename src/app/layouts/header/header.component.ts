import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isVisible = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  };
  toggle() {
    this.isVisible = !this.isVisible;
  }


  update(): void {

  }

}
