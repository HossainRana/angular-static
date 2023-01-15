import { Component, HostListener } from '@angular/core';

import { HeaderComponent } from './layouts/header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'okay-app';

  isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 100;

  @HostListener('scroll', ['$event'])
  onWindowScroll(e:any) {
    this.currPos = (window.pageYOffset || e.target.scrollTop) - (e.target.clientTop || 0);

    let element = document.querySelector('.khttki-header') as HTMLElement;
    if(this.currPos >= this.changePos ) {
      element.classList.add('scrolled');
  } else {
    element.classList.remove('scrolled');
  }
    console.log(this.currPos);
  }

}
