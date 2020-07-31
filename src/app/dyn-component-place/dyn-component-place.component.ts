import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dyn-component-place',
  templateUrl: './dyn-component-place.component.html',
  styleUrls: ['./dyn-component-place.component.scss']
})
export class DynComponentPlaceComponent implements OnInit {

  @Input() components: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
