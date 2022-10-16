import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
  }

  login(){
    console.log("entrar")
    this.router.navigate(['login'])
  }

  registro(){
    console.log("registro")
    this.router.navigate(['register'])
  }

  info(){
    console.log("info")
    this.router.navigate(['info'])
  }

  fail(){
    console.log("error")
    this.router.navigate(['error'])
  }

}