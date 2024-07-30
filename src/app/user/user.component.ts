import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatCardModule} from '@angular/material/card';
import { UserService } from '../firebase-services/user.service';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule, MatCardModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(public dialog: MatDialog, private userService: UserService) {
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

  getUsers(){
    return this.userService.users;
  }
}
