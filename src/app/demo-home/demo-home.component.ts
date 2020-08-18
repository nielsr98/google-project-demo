import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkListbox, ListboxSelectionChangeEvent} from "@angular/cdk-experimental/listbox";
import {Router} from "@angular/router";

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.scss']
})
export class DemoHomeComponent implements OnInit {
  @ViewChild('navList', {static: true}) private _navList: CdkListbox<string>;

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
    this._navList.selectionChange.subscribe((event: ListboxSelectionChangeEvent<string>) => {
      if (event.option.selected) {
        this.router.navigateByUrl(event.option.value);
      }
    });

  }

}
