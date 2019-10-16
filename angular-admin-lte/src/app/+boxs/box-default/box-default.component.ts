import { Component, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  templateUrl: './box-default.component.html',
  styleUrls: ['./box-default.component.css']
})
export class BoxDefaultComponent implements AfterViewInit {

  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
