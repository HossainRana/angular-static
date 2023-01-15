import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-landing-acord',
  templateUrl: './landing-acord.component.html',
  styleUrls: ['./landing-acord.component.css']
})
export class LandingAcordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  panelOpenState = true;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  panelOpenState5 = false;
}
