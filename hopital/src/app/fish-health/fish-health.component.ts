import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormGroup  } from '@angular/forms';



@Component({
  selector: 'app-fish-health',
  templateUrl: './fish-health.component.html',
  styleUrls: ['./fish-health.component.scss']
})
export class FishHealthComponent implements OnInit {
  patogenForm: FormGroup;


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
  //////////////
  files: File[] = [];
  
  ngOnInit(): void {
    
  }
  onSubmit() {
    console.log(this.patogenForm.value);
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.patogenForm = this.fb.group({
      bacteria: [''],
      virus: [''],
      parasite: [''],
      other: ['']
    });
  }
  onFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.files = Array.from(event.dataTransfer!.files);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.files = Array.from(input.files);
    }
  }

  uploadFiles() {
    const formData = new FormData();
    this.files.forEach(file => formData.append('files', file, file.name));

    const headers = new HttpHeaders({
      'Authorization': 'Bearer YOUR_TOKEN_HERE'
    });

    this.http.post('http://localhost:8000/upload/', formData, { headers })
      .subscribe(response => {
        console.log('Upload success', response);
      }, error => {
        console.error('Upload error', error);
      });
  }
}