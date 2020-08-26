import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CdkListboxModule} from "@angular/cdk-experimental/listbox";
import { ListboxExamplesComponent } from './listbox-examples/listbox-examples.component';
import { ComboboxExamplesComponent } from './combobox-examples/combobox-examples.component';
import { SearchExampleComponent } from './search-example/search-example.component';
import { ImagesExampleComponent } from './images-example/images-example.component';
import {CdkComboboxModule} from "@angular/cdk-experimental/combobox";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    DemoHomeComponent,
    ListboxExamplesComponent,
    ComboboxExamplesComponent,
    SearchExampleComponent,
    ImagesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CdkListboxModule,
    CdkComboboxModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
