import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Folder } from "../../models/folder.model";
import { FolderService } from "../../services/folder.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<Folder>();

  folderName = '';
  param = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  closePopup() {
    this.close.emit();
  }

  addFolder() {
    if (!this.folderName) {
      return;
    }
    const folder = new Folder({title: this.folderName});
    const [childRoute] = this.activatedRoute.snapshot.children;
    folder.parentFolderUUID = childRoute?.params?.id;

    if(this.param) {
      folder.parentFolderUUID = this.param;
    }

    this.add.emit(folder);
  }
}
