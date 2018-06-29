import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from '../services/user.service'
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [UserService]
})
export class UserModule { }
