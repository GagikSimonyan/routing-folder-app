export class Folder {
  id: number;
  title = '';
  subFolder: Array<number>;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.subFolder = data.subFolder;
  }
}
