import { v4 as uuidv4 } from 'uuid';

export class Folder {
  id: number;
  uuid = uuidv4();
  title = '';
  img = 'assets/img/folder.png'
  // subFolder: Array<number>;
  parentFolderUUID!: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    // this.subFolder = data.subFolder || [];
  }
}
