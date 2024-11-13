import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService, User } from '../../services/user.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.page.html',
  styleUrls: ['./create-users.page.scss'],
})
export class CreateUsersPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastController: ToastController
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]]
    });
  }

  async onCreate() {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;

      this.userService.createUser(newUser).subscribe(
        async (response) => {
          console.log('User created successfully:', response);
          this.userForm.reset();

          // Show success toast
          const toast = await this.toastController.create({
            message: 'User created successfully!',
            duration: 2000,
            color: 'success'
          });
          toast.present();
        },
        async (error) => {
          console.error('Error creating user:', error);

          // Show error toast
          const toast = await this.toastController.create({
            message: 'Error creating user.',
            duration: 2000,
            color: 'danger'
          });
          toast.present();
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  ngOnInit() {
  }

}
