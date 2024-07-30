import { inject, Injectable, OnInit } from '@angular/core';
import { Firestore, getDoc, limit, onSnapshot, query, updateDoc } from '@angular/fire/firestore';
import { collection, addDoc, doc, getDocs } from "firebase/firestore";
import { User } from '../models/user.class';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  firestore: Firestore = inject(Firestore);

  unsubUsers;

  constructor() {
    this.unsubUsers = this.subUsersList();
  }

  ngOndestroy() {
    // this.unsubUsers()
  }


  async addUser(user: User, colId: string) {
    await addDoc(this.getUsersRef(), user).catch(
      (err) => { console.log(err) }
    ).then(
      (docRef) => { console.log('user added with ID', docRef?.id) }
    )
  };

  setUserObject(obj: any, id: string): any {
    return {
      id: id,
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      address: obj.address,
      birthDate: obj.birthDate,
      city: obj.city,
      zipCode: obj.zipCode
    }

  }

  async subUsersList() {
    const q = query(this.getUsersRef(), limit(100));
    return onSnapshot(q, (list) => {
      this.users = [];
      list.forEach(element => {
        console.log(this.users)
        this.users.push(this.setUserObject(element.data(), element.id));
      });
      list.docChanges().forEach(change => {
        if (change.type === "added") {
          console.log("New user: ", change.doc.data());
        }
        if (change.type === "modified") {
          // hier sollte man die getUserDetail hinzufügen damit auch das HTML geändert wird
          console.log("Modified user: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed user: ", change.doc.data());
        }
      });
    })
  }


  getUsersRef() {
    return collection(this.firestore, 'users');
  }


  async updateUser(user:User, userId:string){
    console.log(user)
    const docRef = doc(this.getUsersRef(), userId);
    await updateDoc(docRef, this.setUserObject(user, userId)).catch(
      (err)=> { console.log(err,'user from model is');}
    )

  }





  // async getUserDetails() {
  //   const docRef = doc(this.firestore, "users");
  //   const userDetails = await getDoc(docRef);

  //   if (userDetails.exists()) {
  //     console.log("Document data:", userDetails.data());
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }
}
