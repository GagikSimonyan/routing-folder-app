import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './modules/popup/popup.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { FormsModule } from "@angular/forms";
import { PlaceholderDirective } from './directives/placeholder.directive';
import { HttpClientModule } from "@angular/common/http";
import { FolderItemComponent } from "./modules/folder-item/folder-item.component";
import { FolderListComponent } from './modules/folder-list/folder-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    PageNotFoundComponent,
    FolderListComponent,
    FolderItemComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
