import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { FolderItemComponent } from "./modules/folder-item/folder-item.component";

const appRoutes: Routes = [
  { path: 'folder/:id', component: FolderItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
