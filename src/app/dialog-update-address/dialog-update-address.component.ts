import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserService } from '../firebase-services/user.service';
import { doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-update-address',
  standalone: true,
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
  templateUrl: './dialog-update-address.component.html',
  styleUrl: './dialog-update-address.component.scss'
})
export class DialogUpdateAddressComponent {
  user!: User;
  userId!: string;
  loading = false;
  closeDialog = false;

  constructor(private userService: UserService){
    
  }

  async updateUserAddress(){
    this.loading = true;
    await this.userService.updateUser(this.userService.setUserObject(this.user, this.userId), this.userId);
    this.loading = false;
  }


}
