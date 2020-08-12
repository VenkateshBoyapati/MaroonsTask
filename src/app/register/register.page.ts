import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username=''
  password=''
  mobileno=''
  constructor(private storage: Storage) {
         
   }
  ngOnInit() {
  }

    async register(image:string,firstname:string,lastname:string ,mobileno :number ,username: string, password: string) {
    this.storage.set('image',image)
    this.storage.set('firstname',firstname)
    this.storage.set('lastname',lastname)
    this.storage.set('mobileno',mobileno)
    this.storage.set('username',username)
    this.storage.set('password',password)
    // alert("Successfully Registered ")
    setTimeout(() => {
      location.replace('login')
    }, 2000);
    

 }

}
