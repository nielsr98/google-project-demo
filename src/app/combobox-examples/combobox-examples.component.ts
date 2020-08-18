import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkListbox, ListboxSelectionChangeEvent} from "@angular/cdk-experimental/listbox";
import {CdkCombobox} from "@angular/cdk-experimental/combobox";
import {Subject} from "rxjs";

@Component({
  selector: 'app-combobox-examples',
  templateUrl: './combobox-examples.component.html',
  styleUrls: ['./combobox-examples.component.scss']
})
export class ComboboxExamplesComponent implements AfterContentInit {
  @ViewChild('fruitCombobox', {static: true}) private readonly _fruitCombobox: CdkCombobox<string>;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  @ViewChild('flavorList') _flavorList: CdkListbox<string>;

  readonly inputValue = new Subject<string>();
  readonly flavorValue = new Subject<string>();

  possibleFruit = [
    'apple',
    'orange',
    'peach',
    'lemon',
    'strawberry',
    'lime',
  ];

  possibleFlavors = [
      'Vanilla',
      'Chocolate',
      'Strawberry',
      'Neopolitan',
      'Rocky Road',
      'Banana',
      'Mango',
      'Chocolate Chip',
      'Banana Cream'
  ];

  ngAfterContentInit() {
    this._fruitCombobox.panelValueChanged.subscribe((event: string) => {
      this.fruitInput.nativeElement.value = event.toString();
      this.inputValue.next(event.toString());
    });

  }

  getFlavors(value: string | null): string[] {
    let filtered: string[] = this.possibleFlavors;
    if (value !== null && value.length > 0) {
      filtered = this.possibleFlavors.filter(
          word => word.toLowerCase().startsWith(value.toLowerCase())
      );
    }

    return filtered;
  }

  getFruit(value: string | null): string[] {
    let filtered: string[] = this.possibleFruit;
    if (value !== null && value.length > 0) {
      filtered = this.possibleFruit.filter(word => word.includes(value));
    }

    return filtered;
  }
}
