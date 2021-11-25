import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Folder } from "../../models/folder.model";
import { FolderService } from "../../services/folder.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<Folder>();
  folderName: string = '';

  constructor(private service: FolderService) { }

  ngOnInit(): void {
  }

  closePopup() {
    this.close.emit();
  }

  addFolder() {
    if (!this.folderName) {
      return;
    }
    const folder = new Folder({title: this.folderName, subFolder: []});
    this.service.addFolder(folder).subscribe();
    this.add.emit(folder);
  }
}
