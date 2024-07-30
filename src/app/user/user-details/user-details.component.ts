import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../firebase-services/user.service';
import { ActivatedRoute } from '@angular/router';
import { collection, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateAddressComponent } from '../../dialog-update-address/dialog-update-address.component';
import { DialogUpdateUserComponent } from '../../dialog-update-user/dialog-update-user.component';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  userId = '';
  user: User = new User();
  birthdate!: Date;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']
    });
    this.getUserDetails();
  }

  async getUserDetails() {
    const userRef = doc(this.userService.getUsersRef(), this.userId);
    const user = await getDoc(userRef);
    if (user.exists()) {
      this.user = user.data() as User;
      console.log(this.user.birthDate);
      console.log('user details are:', this.user)
    } else {
      console.log("No such document!");
    }
  }

  openUpdateUserAdressDialog() {
    const dialog = this.dialog.open(DialogUpdateAddressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  openUpdateUserDialog() {
    const dialog = this.dialog.open(DialogUpdateUserComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }



  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }

}


