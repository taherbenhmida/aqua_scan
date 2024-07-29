import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.scss']
})
export class TanksComponent implements OnInit {
  tanks: any[] = [];
  tankForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tankForm = this.fb.group({
      tankName: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  ngOnInit() {
    // Initialize any existing tanks
    this.addTank();
  }

  addTank() {
    const newTank = {
      id: this.tanks.length + 1,
      name: `Tank ${this.tanks.length + 1}`, // Generate unique tank name
      // Add additional properties as needed
    };
    this.tanks.push(newTank);
  }

  removeTank(tankId: number) {
    this.tanks = this.tanks.filter(tank => tank.id !== tankId);
  }

  onSubmit() {
    if (this.tankForm.valid) {
      // Process form submission (e.g., save tank data)
      console.log('Tank form submitted:', this.tankForm.value);
      // Reset the form after submission
      this.tankForm.reset();
    } else {
      // Handle form validation errors
      console.error('Tank form is invalid.');
    }
  }
}
