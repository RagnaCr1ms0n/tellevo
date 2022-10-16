import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cliente } from 'src/app/services/cliente';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HomeService } from 'src/app/services/home.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{ 


 
  cliente: Cliente
  mensaje: string

  constructor(private fire: FirebaseService ,private servicio: HomeService, private router: Router, private route: ActivatedRoute,  private alerta: AlertController ) { 
    

   

  }

  ngOnInit() {
  }


  ionViewWillEnter(){
    
  }
 
  async login(email,pass){
    const user = this.fire.login(email.value,pass.value);
    if (user) {
      this.router.navigate(['/viajes'])
    } else {
      console.log("papure")
      const uwu = await this.alerta.create({
        header: 'Error',
        subHeader: 'Credenciales incorrectas',
        message: 'Por favor verifique que los datos ingresados sean correctos',
        buttons: ['OK'],
      });
  
      await uwu.present();
    }
   }
  
 registro(){
  this.router.navigate(['register'])
 }

 recuperar(){
  this.router.navigate(['recuperar'])
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
