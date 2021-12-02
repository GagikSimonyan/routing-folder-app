import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Folder } from "../models/folder.model";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  onAddFolder$ = new Subject<Folder>();

  constructor(private http: HttpClient) { }

  getFolders() {
    return this.http.get<Folder[]>(`${environment.BASE_URL}/folder`).pipe(map(folders => folders.map(folder => new Folder(folder))));
  }

  getFolder(uuid: string) {
    // debugger
    // return this.http.get<Folder>(`${environment.BASE_URL}/folder?uuid=${uuid}`);
    return this.getFolders().pipe(
      map(folders => folders.find(folder => {
        return folder.uuid == uuid
      }))
    )
  }

  addFolder(payload: Folder) {
    return this.http.post<Folder>(`${environment.BASE_URL}/folder`, payload)
  }

}
