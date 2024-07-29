import { AfterViewInit, Component, OnInit , Renderer2} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import {  ElementRef, ViewChild } from '@angular/core';
import { UrlSegment, UrlSegmentGroup, Route, UrlMatchResult } from '@angular/router';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PlotService } from '../plot.service';


@Component({
  selector: 'app-fish-growth',
  templateUrl: './fish-growth.component.html',
  styleUrls: ['./fish-growth.component.scss'],
  
})

export class FishGrowthComponent implements OnInit {
  plotBlobUrl: SafeUrl | undefined;
  plotBlob: Blob | undefined;
  enlarged: boolean = true;

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

  ///for the stepper 
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  constructor( private _formBuilder: FormBuilder,
                breakpointObserver: BreakpointObserver,
                private plotService: PlotService,
                private sanitizer: DomSanitizer,
                private renderer: Renderer2) {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
     }

     

     public canvas: any;
    public ctx: any;

  // Define data for the bar chart
  private data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [{
      label: 'Specific Growth Rate (% per day)',
      data: [50,56,60,55,45,60,70,64,50,58],
      backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the color as needed
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  // Define options for the bar chart
  private options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  /// weight gain chart :
  public wgCanvas: any;  // Canvas for the Weight Gain chart
  public wgCtx: any;

  // Define data for the Weight Gain chart
  private wg_data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [{
      label: 'Weight Gain (g)',
      data: [2,3,-5,-3,-2,0,0,1,3,2],
      fill: true,
      borderColor: 'rgba(255, 99, 132, 1)', // Customize the line color as needed
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Customize the fill color as needed
      borderWidth: 2,
      tension: 0.4 // This option smooths the line
    }]
  };

  // Define options for the line chart
  private wg_options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  // gauge chart :
  public canvasWidth = 400
  public FCR  = 65
  public PER  = 45
  public HSI  = 80

  public centralLabel = ''
  
  public FCR_Label = '65'
  public PER_Label = '45'
  public HSI_Label = '80'

  public options_gauge = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(255, 105, 120)','rgb(253, 231, 76)' , 'rgb(68, 175, 105)'],
      arcDelimiters: [20,70],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
  }



  ngOnInit() {
    // Get the canvas element and its context
    this.canvas = document.getElementById('growthPerformanceChart');
    this.ctx = this.canvas.getContext('2d');

    // Create the bar chart
    new Chart(this.ctx, {
      type: 'bar',
      data: this.data,
      options: this.options
    });

    // Initialize the Weight Gain chart
    this.wgCanvas = document.getElementById('wgChart');
    this.wgCtx = this.wgCanvas.getContext('2d');
    new Chart(this.wgCtx, {
      type: 'line',
      data: this.wg_data,
      options: this.wg_options
    });

    this.loadPlot();
  }

  // Define lists of tanks for each room
  room1Tanks: string[] = ['Tank 1', 'Tank 2', 'Tank 3'];
  room2Tanks: string[] = ['Tank A', 'Tank B', 'Tank C'];

  // Variable to hold the selected tank
  selectedTank!: string;
  

  loadPlot() {
    this.plotService.getPlot().subscribe(data => {
      const url = URL.createObjectURL(data);
      this.plotBlobUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      this.plotBlob = data; // Store the Blob for later use in printing
      console.log('Generated Plot URL:', url);
    });
  }

  toggleEnlarged() {
    this.enlarged = !this.enlarged;
  }

  printPlot() {
    if (this.plotBlob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        const printWindow = window.open('', '', 'height=600,width=800');
        if (printWindow) {
          printWindow.document.open();
          printWindow.document.write('<html><head><title>Daily Tempreture Curve</title>');
          printWindow.document.write('<style> img { width: 100%; height: auto; } </style></head><body>');
          printWindow.document.write(`<img src="${dataUrl}" alt="Plot">`);
          printWindow.document.write('</body></html>');
          printWindow.document.close();
          printWindow.focus();
          setTimeout(() => { printWindow.print(); }, 500); // Wait for the image to load before printing
        }
      };
      reader.readAsDataURL(this.plotBlob);
    } else {
      alert('No plot image available to print.');
    }
  }
}


