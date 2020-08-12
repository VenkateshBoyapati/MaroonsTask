import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  getusername=''
  getpassword=''
  constructor(private storage: Storage) {
    this.getTheValue()
   }
   
   getTheValue(){
    this.storage.get('username').then((name)=>{
      console.log(name)
      this.getusername=name
    })
    this.storage.get('password').then((pass)=>{
      console.log(pass)
      this.getpassword=pass
    })
   }
 
  ngOnInit() {
  }
  async login(username: string, passwd: string) {
  
    if(username==this.getusername && passwd==this.getpassword)
    {
      location.replace("profile")
    }
    else
    {
      alert("invalid details")
    }
  }

}
