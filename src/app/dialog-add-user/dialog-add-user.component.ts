import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../models/user.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserService } from '../firebase-services/user.service';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatIcon,
    MatDatepickerModule,
    MatProgressBarModule,
    MatDialogClose
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})

export class DialogAddUserComponent {

  user = new User;
  loading = false;
  closeDialog = false;
  birthdate!: Date;

  constructor(private userService: UserService) {
    console.log('service is', this.userService);

  }

  saveUser() {
    console.log('currentUser is', this.user);
    this.userService.addUser(this.setObject(), 'users');
    this.closeDialog = true;
  }

  setObject(){
    return {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      address: this.user.address,
      birthDate: this.user.birthDate,
      zipCode: this.user.zipCode,
      city: this.user.city
    }
  }


  onNoClick(): void {
  }
}
