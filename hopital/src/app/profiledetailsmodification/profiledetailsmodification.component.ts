import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profiledetailsmodification',
  templateUrl: './profiledetailsmodification.component.html',
  styleUrls: ['./profiledetailsmodification.component.scss']
})
export class ProfiledetailsmodificationComponent implements OnInit {

  constructor(private service : SharedService ) { }

  addPersonelSub!: Subscription;

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.addPersonelSub.unsubscribe
  }
  onSubmit() {
    this.addPersonelSub = this.service.addPersonne(this.service.personnelList).subscribe((res) => {
      console.log(res)
      console.log(this.service.personnelList)
    })
    
    
  }

}
