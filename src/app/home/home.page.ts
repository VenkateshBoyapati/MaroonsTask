import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getusername=''
  getmobile=''
  firstname=''
  lastname=''
  image=''
  constructor(private storage: Storage) {
    this.getTheValue()
   }
   
   getTheValue(){
    this.storage.get('image').then((image)=>{
      console.log(image)
      this.image=image
    })
    this.storage.get('firstname').then((firstname)=>{
      console.log(firstname)
      this.firstname=firstname
    })
    this.storage.get('lastname').then((lastname)=>{
      console.log(lastname)
      this.lastname=lastname
    })
    this.storage.get('username').then((name)=>{
      console.log(name)
      this.getusername=name
    })
    this.storage.get('mobileno').then((mobileno)=>{
      console.log(mobileno)
      this.getmobile=mobileno
    })
   }
 

}
