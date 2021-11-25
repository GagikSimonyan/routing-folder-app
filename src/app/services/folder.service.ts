import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Folder } from "../models/folder.model";

@Injectable({
  providedIn: 'root'
})

export class FolderService {

  constructor(private http: HttpClient) { }

  getFolders() {
    return this.http.get<Folder[]>(`${environment.BASE_URL}/folder`)
  }

  getFolder(id: number) {
    return this.http.get<Folder>(`${environment.BASE_URL}/folder/${id}`);
  }

  addFolder(payload: Folder) {
    return this.http.post<Folder>(`${environment.BASE_URL}/folder`, payload)
  }

}
