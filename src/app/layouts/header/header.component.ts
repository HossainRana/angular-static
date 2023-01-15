import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('widthGrow', [
      state('closed', style({
        height: 0,
      })),
      state('open', style({
        height: '100%'
      })),
      transition('* => *', animate(150))
    ]),
  ]
})

export class HeaderComponent implements OnInit {
  public show:boolean = true;
  public navToggle:any = 'Show';  state = "closed";

  changeState(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  };
  toggle() {
    if (window.screen.width <= 991){
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
