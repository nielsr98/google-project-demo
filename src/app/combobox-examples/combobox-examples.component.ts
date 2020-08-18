import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkListbox} from "@angular/cdk-experimental/listbox";
import {CdkCombobox} from "@angular/cdk-experimental/combobox";
import {Subject} from "rxjs";

@Component({
  selector: 'app-combobox-examples',
  templateUrl: './combobox-examples.component.html',
  styleUrls: ['./combobox-examples.component.scss']
})
export class ComboboxExamplesComponent implements AfterContentInit {
  @ViewChild('guardianListbox', {static: true}) private readonly _guardianListbox: CdkListbox<string>;
  @ViewChild('fruitCombobox', {static: true}) private readonly _fruitCombobox: CdkCombobox<string>;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('destinyCombobox', {static: true}) private readonly _destinyCombobox: CdkCombobox<string>;
  @ViewChild('destinyButton') destinyButton: ElementRef<HTMLButtonElement>;

  readonly inputValue = new Subject<string>();
  readonly countryValue = new Subject<string>();

  possibleFruit = [
    'apple',
    'orange',
    'peach',
    'lemon',
    'strawberry',
    'lime',
  ];

  possibleCountries = [
    'USA',
    'Canada',
    'Mexico',
    'France',
    'UK',
    'Spain',
    'South Korea'
  ];

  arcChecked = false;
  solarChecked = false;
  voidChecked = false;

  guardian: string = '';
  character: string = '';

  ngAfterContentInit() {
    this._fruitCombobox.panelValueChanged.subscribe((event: string) => {
      this.fruitInput.nativeElement.value = event.toString();
      this.inputValue.next(event.toString());
    });

    this._destinyCombobox.panelValueChanged.subscribe((event: string) => {
      this.destinyButton.nativeElement.textContent = 'Create Character';
      this.character = event;
    });
  }

  getFruit(value: string | null): string[] {
    let filtered: string[] = this.possibleFruit;
    if (value !== null && value.length > 0) {
      filtered = this.possibleFruit.filter(word => word.includes(value));
    }

    return filtered;
  }

  getCountries(value: string | null): string[] {
    let filtered: string[] = this.possibleCountries;
    if (value !== null && value.length > 0) {
      filtered = this.possibleCountries
          .filter(word => word.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }

    if (filtered.length === 0) {
      filtered.push('No matching country')
    }
    return filtered;
  }

  elementChecked(value: string) {
    if (value === 'arc') {
      this.solarChecked = this.arcChecked ? false : this.solarChecked;
      this.voidChecked = this.arcChecked ? false : this.voidChecked;
    } else if (value === 'solar') {
      this.arcChecked = this.solarChecked ? false : this.arcChecked;
      this.voidChecked = this.solarChecked ? false : this.voidChecked;
    } else {
      this.arcChecked = this.voidChecked ? false : this.arcChecked;
      this.solarChecked = this.voidChecked ? false : this.solarChecked;
    }
  }

  updateGuardian(values: any[]) {
    if (values.length > 0) {
      this.guardian = values[0] as string;
    }
  }

  getDestinyData(): string {
    let data = 'Character: ';
    if (this.guardian.length === 0) {
      return 'Must select a guardian class';
    } else if (!this.solarChecked && !this.arcChecked && !this.voidChecked) {
      return 'Must select an elemental subclass';
    }

    data = `${this.guardian}: `;
    if (this.solarChecked) {
      data += 'solar';
    } else if (this.arcChecked) {
      data += 'arc';
    } else {
      data += 'void';
    }

    this.resetGuardian();

    return data;
  }

  resetGuardian() {
    this.guardian = '';
    this.solarChecked = false;
    this.arcChecked = false;
    this.voidChecked = false;
  }
}
