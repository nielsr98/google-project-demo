import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListboxExamplesComponent} from "./listbox-examples/listbox-examples.component";
import {ComboboxExamplesComponent} from "./combobox-examples/combobox-examples.component";
import {SearchExampleComponent} from "./search-example/search-example.component";
import {ImagesExampleComponent} from "./images-example/images-example.component";

const routes: Routes = [
  {
    path: 'listbox',
    component: ListboxExamplesComponent
  },
  {
    path: 'combobox',
    component: ComboboxExamplesComponent
  },
  {
    path: 'search',
    component: SearchExampleComponent
  },
  {
    path: 'images',
    component: ImagesExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
