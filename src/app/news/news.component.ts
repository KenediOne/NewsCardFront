import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import { News } from "../models/News";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getCategorys();
  }
  public categorys: string[] = [];
  public items: News[] = [];
  public sortPosition: boolean = true;
  public dataOfCategory: string = '';
  public paginationData: number = 10;

  pagination(){
    if( this.paginationData <= 0 ) this.paginationData = 10;
    this.getNews( this.dataOfCategory, this.paginationData );
  }

  sort(){
    this.sortPosition = !this.sortPosition;
    this.getNews( this.dataOfCategory, this.paginationData );
  }

  getData( dataOfCategory: string ){
    this.getNews( dataOfCategory, this.paginationData );
  }

  async getCategorys(){
    this.categorys = await this.newsService.getNews('category');
    this.dataOfCategory = this.categorys[0];
    this.getNews( this.dataOfCategory, this.paginationData );
  }

  async getNews( dataOfCategory: string, dataOfPagination: number ){
    const sorting = this.sortPosition? 'DESC' : 'ASC';
    this.items = await this.newsService.getNews('info?category=' + dataOfCategory + '&sort=' + sorting + '&page=0,' + dataOfPagination );
  }

  checkItem( number : number ){
    this.items[number].visible = !this.items[number].visible;
  }

}

