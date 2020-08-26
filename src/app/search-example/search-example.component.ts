import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import {CdkCombobox} from "@angular/cdk-experimental/combobox";
import {Subject} from "rxjs";
import {ENTER} from "@angular/cdk/keycodes";
import {CdkListbox, ListboxSelectionChangeEvent} from "@angular/cdk-experimental/listbox";

@Component({
  selector: 'app-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.scss']
})
export class SearchExampleComponent implements AfterViewInit , AfterViewChecked{

  @ViewChild('searchCombobox', {static: true}) private readonly _searchCombobox: CdkCombobox<string>;
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;

  @ViewChild('filterListbox', {static: false}) private readonly _filterListbox: CdkListbox<string>;
  oldFilterListbox: CdkListbox<string>;

  readonly searchValue = new Subject<string>();

  showRestaurantView = false;

  possibleQueries = [
    'Angular',
    'Google',
    'Restaurants',
    'Reservations',
    'Research',
    'Combobox',
    'Food'
  ];

  restaurantFilters = [
      'Open',
      'Nearby',
      'Takeout',
      'Mexican',
      'Chinese',
      'Italian',
      'Sushi',
      'Korean',
      'American',
  ];

  restaurants: Restaurant[] = [
    {name: 'Taco Bell', cuisine: 'Mexican', nearby: true, open: true, takeout: true},
    {name: 'Olive Garden', cuisine: 'Italian', nearby: false, open: true, takeout: true},
    {name: 'Mizu', cuisine: 'Sushi', nearby: true, open: false, takeout: false},
    {name: 'Louie Louie', cuisine: 'American', nearby: true, open: true, takeout: true},
    {name: 'Wawa', cuisine: 'American', nearby: true, open: true, takeout: true},
    {name: 'Barclay Prime', cuisine: 'American', nearby: false, open: true, takeout: false},
    {name: 'Koreana', cuisine: 'Korean', nearby: true, open: true, takeout: true},
    {name: 'Chipotle', cuisine: 'Mexican', nearby: true, open: true, takeout: true},
    {name: 'Bubblefish', cuisine: 'Sushi', nearby: false, open: true, takeout: true},
    {name: 'Zestos', cuisine: 'Italian', nearby: true, open: true, takeout: true},
  ];

  filteredRestaurants: Restaurant[] = this.restaurants;

  filteringNearby = false;
  filteringOpen = false;
  filteringTakeout = false;
  cuisineFilters: string[] = [];

  constructor() { }

  ngAfterViewInit() {
    this._searchCombobox.panelValueChanged.subscribe((event: string) => {
      this.searchInput.nativeElement.value = event.toString();
      this.searchValue.next(event.toString());
    });
  }

  ngAfterViewChecked() {
    if (this.oldFilterListbox !== this._filterListbox) {
      if (this._filterListbox) {
        this.oldFilterListbox = this._filterListbox;
        this._filterListbox.selectionChange.subscribe((event: ListboxSelectionChangeEvent<string>) => {
          this.updateFilterChipOrder();
          const option = event.option;
          if (option.selected) {
            if (option.value === 'Nearby') {
              this.filteringNearby = true;
            } else if (option.value === 'Open') {
              this.filteringOpen = true;
            } else if (option.value === 'Takeout') {
              this.filteringTakeout = true;
            } else {
              this.cuisineFilters.push(option.value);
            }
          } else {
            if (option.value === 'Nearby') {
              this.filteringNearby = false
            } else if (option.value === 'Open') {
              this.filteringOpen = false;
            } else if (option.value === 'Takeout') {
              this.filteringTakeout = false;
            } else {
              const index = this.cuisineFilters.indexOf(option.value);
              if (index !== -1) {
                this.cuisineFilters.splice(index, 1);
              }

            }
          }

          this.updateRestaurants();
        });
      }
    }
  }

  updateFilterChipOrder() {
    const selectedFilters = this._filterListbox.getSelectedValues();
    const nonSelectedFilters = this.restaurantFilters.filter(f => !selectedFilters.includes(f));
    this.restaurantFilters = selectedFilters.concat(nonSelectedFilters);
  }

  updateRestaurants() {
    this.filteredRestaurants = this.restaurants;
    if (this.filteringTakeout) {
      this.filteredRestaurants = this.filteredRestaurants.filter(r => r.takeout);
    }
    if (this.filteringOpen) {
      this.filteredRestaurants = this.filteredRestaurants.filter(r => r.open);
    }
    if (this.filteringNearby) {
      this.filteredRestaurants = this.filteredRestaurants.filter(r => r.nearby);
    }

    if (this.cuisineFilters.length !== 0) {
      this.filteredRestaurants = this.filteredRestaurants.filter(r => this.cuisineFilters.includes(r.cuisine));
    }
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

  handleQuery(query: string) {
    if (query === 'Restaurants') {
      this.showRestaurantView = true;
    }
  }

  handleKeydown(event: KeyboardEvent, query: string) {
    const {keyCode} = event;

    if (keyCode === ENTER) {
      this.handleQuery(query);
    }
  }
}

export interface Restaurant {
  name: string;
  nearby: boolean;
  open: boolean;
  takeout: boolean;
  cuisine: string;
}
