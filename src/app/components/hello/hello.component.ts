import { Component, OnInit } from '@angular/core';
// import fade in animation
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
 
    // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
