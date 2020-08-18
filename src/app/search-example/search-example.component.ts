import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkCombobox} from "@angular/cdk-experimental/combobox";
import {Subject} from "rxjs";

@Component({
  selector: 'app-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.scss']
})
export class SearchExampleComponent implements AfterContentInit {

  @ViewChild('searchCombobox', {static: true}) private readonly _searchCombobox: CdkCombobox<string>;
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;

  readonly searchValue = new Subject<string>();

  possibleQueries = [
    'Angular',
    'Google',
    'Combobox',
    'Listbox',
    'Pokemon',
    'United States',
    'Food'
  ];

  constructor() { }

  ngAfterContentInit() {
    this._searchCombobox.panelValueChanged.subscribe((event: string) => {
      this.searchInput.nativeElement.value = event.toString();
      this.searchValue.next(event.toString());
    });
  }

  getResult(value: string | null): string[] {
    let filtered: string[] = this.possibleQueries;
    if (value !== null && value.length > 0) {
      filtered = this.possibleQueries.filter(
          word => word.toLowerCase().startsWith(value.toLowerCase())
      );
    }

    return filtered;
  }
}
