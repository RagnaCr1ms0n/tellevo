import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostServiceProvider } from 'src/app/services/post-services.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  constructor(private nav: NavController, private post: PostServiceProvider, private http: HttpClient) { }

  usuarios = []

  ngOnInit() {
    this.http.get<any>('https://radiant-sierra-97298.herokuapp.com/api/usuarios')
    .subscribe(res => { 
      console.log(res);
      this.usuarios = res.data;
    })
  }


}



