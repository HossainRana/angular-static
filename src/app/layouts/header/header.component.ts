import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public show:boolean = true;
  public navToggle:any = 'Show';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if (window.screen.width > 991){
      this.navToggle ="Show"
    }
  };

  toggle() {
    if (window.screen.width <= 991){
      console.log('mobile view');
      this.show = !this.show;
      if(this.show)
        this.navToggle = "Hide";
      else
        this.navToggle = "Show";
    }
  }

  update(): void {

  }

}
