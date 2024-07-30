import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../models/user.class';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UserService } from '../firebase-services/user.service';

@Component({
  selector: 'app-dialog-update-user',
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
  ],  templateUrl: './dialog-update-user.component.html',
  styleUrl: './dialog-update-user.component.scss'
})
export class DialogUpdateUserComponent {
  user! : User;
  userId!: string;
  loading = false;
  closeDialog = false;

  constructor(private userService: UserService){
    
  }


  updateUserAddress(){
    this.userService.updateUser(this.userService.setUserObject(this.user, this.userId), this.userId);
  }

}
