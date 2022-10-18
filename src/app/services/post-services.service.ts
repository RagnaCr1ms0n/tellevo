import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PostServiceProvider {

  apiUrl = 'https://radiant-sierra-97298.herokuapp.com/api';

  constructor(public http: HttpClient) {

  }

  getPosts(){ 
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/usuarios').subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

}

