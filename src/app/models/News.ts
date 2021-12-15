export class News{


  constructor(id: number, author: string, date: Date, info: string, publishedAt: string, visible: boolean) {
    this.id = id;
    this.author = author;
    this.date = date;
    this.info = info;
    this.description = publishedAt;
    this.visible = visible;
  }

  id: number;
  author: string;
  date: Date;
  info: string;
  description: string;
  visible: boolean = false;

}
