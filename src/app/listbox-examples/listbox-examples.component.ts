import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbox-examples',
  templateUrl: './listbox-examples.component.html',
  styleUrls: ['./listbox-examples.component.scss']
})
export class ListboxExamplesComponent implements OnInit {
  multiSelectable = false;
  disabledOption2 = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMultiple() {
    this.multiSelectable = !this.multiSelectable;
  }

  toggleDisabledOption() {
    this.disabledOption2 = !this.disabledOption2;
  }
}
