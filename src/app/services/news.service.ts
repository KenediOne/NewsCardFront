import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'http://localhost:8090/api/';

  constructor(private http: HttpClient) { }

  async getNews(addURL:string): Promise<any>{
    let URL:string = this.baseUrl + addURL;
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', "application/json");
    try{
      let result = await this.http.get( URL, {headers:header} ).toPromise();

      return result;
    }catch(error)
    {
      console.log("bad request");
      return null;
    }
  }

}
