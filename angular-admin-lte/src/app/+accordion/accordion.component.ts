import {Component, AfterViewInit, NgZone, ChangeDetectorRef, ViewRef} from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterViewInit {


  constructor() {
    
  }


  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
