import { Component, OnInit } from '@angular/core';
import { FolderService } from "../../services/folder.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Folder } from "../../models/folder.model";

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {
  folder$!: Observable<Folder>;

  constructor(
    private service: FolderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.folder$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getFolder(+params.get('id')!)
    //   )
    // )
  }
}
