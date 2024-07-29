import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import { FormControl, FormGroup  } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-water-quality',
  templateUrl: './water-quality.component.html',
  styleUrls: ['./water-quality.component.scss']
})
export class WaterQualityComponent implements OnInit {
  //pathogen form
  patogenForm: FormGroup;
  SaprophyticForm: FormGroup;
  ///for the select :
  // Define your groups and options
  optionGroups = [
    { name: 'Room 1', options: ['tank 1', 'tank 2', 'tank 3'] },
    { name: 'Room 2', options: ['tank 4', 'tank 5', 'tank 6'] }
  ];
  
  // Form control to hold selected items
  selectedItems = new FormControl([]);
  
  // Method to toggle selection of all options in a group
  toggleGroup(groupName: string, event: any): void {
    const isChecked = event.checked;
    
    // Find the group by name
    const group = this.optionGroups.find(g => g.name === groupName);
    
    if (group) {
      const groupOptions = group.options;
      
      // Get the current selection
      const currentSelection = this.selectedItems.value;
      
      // Add or remove all options from the group based on checkbox state
      if (isChecked) {
        // Add all options from the group to the current selection
        const updatedSelection = [...new Set([...currentSelection, ...groupOptions])];
        this.selectedItems.setValue(updatedSelection);
      } else {
        // Remove all options from the group from the current selection
        const updatedSelection = currentSelection.filter(option => !groupOptions.includes(option));
        this.selectedItems.setValue(updatedSelection);
      }
    }
  }

  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  
  constructor( private _formBuilder: FormBuilder, private fb: FormBuilder) {
    this.patogenForm = this.fb.group({
      bacteria: [''],
      virus: [''],
      parasite: [''],
      other: ['']
    });

    this.SaprophyticForm = this.fb.group({
      Saprophytic : [''],
    });

  }
  onSubmit() {
    console.log(this.patogenForm.value);
  }

  ngOnInit(): void {
    
  }

}
