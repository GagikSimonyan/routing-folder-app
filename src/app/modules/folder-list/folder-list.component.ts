import { Component, OnInit } from '@angular/core';
import { FolderService } from "../../services/folder.service";
import { Folder } from "../../models/folder.model";

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {

  folders: Folder[] = [];

  constructor(private folderService: FolderService) { }

  ngOnInit(): void {
    this.getFolders();
    this.folderService.onAddFolder$.subscribe(folder => this.folders.push(folder))
  }

  getFolders() {
    this.folderService.getFolders().subscribe(data => {
      this.folders = data;
    })
  }
}
