import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { FolderItemComponent } from "./modules/folder-item/folder-item.component";
import { FolderListComponent } from "./modules/folder-list/folder-list.component";

const appRoutes: Routes = [
  {
    path: '',
    component: FolderListComponent,
    children: [
      { path: '', component: FolderListComponent },
      // { path: 'folder/:id', component: FolderItemComponent }
    ]
  },
  {
    path: 'folder/:id',
    component: FolderItemComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
