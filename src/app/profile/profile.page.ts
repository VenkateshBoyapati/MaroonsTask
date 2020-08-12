import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  getusername=''
  getmobile=''
  firstname=''
  lastname=''
  image=''
  constructor(private storage: Storage) {
    this.getTheValue()
   }
  ngOnInit(){
   
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

