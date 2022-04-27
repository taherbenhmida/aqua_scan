import { Component, OnInit ,ViewChild} from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { ProfileinformationformComponent } from '../profileinformationform/profileinformationform.component';
import { form2 } from '../form2/form2.component';
import { formcivil } from '../formcivil/formcivil.component';
import { formmilitaire } from '../formmilitaire/formmilitaire.component';
import { autreform } from '../autreform/autreform.component';
import { MatSnackBar } from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild(ProfileinformationformComponent) child;
  @ViewChild(form2) child1;
  @ViewChild(formcivil) child2;
  @ViewChild(formmilitaire) child3;
  @ViewChild(autreform) child4;

  constructor(private service : SharedService ,private snackBar: MatSnackBar) { }

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
      this.reset()
      this.snackBar.open('','hello',{duration:3000,verticalPosition:'top',horizontalPosition:'right'})
    })
    
  
  }

  reset(){
   
    for (let x in this.child.personnelForm) {
      this.child.personnelForm[x]=null }
    for (let x in this.child1.personnelForm) {
      this.child1.personnelForm[x]=null }
    for (let x in this.child2.personnelForm) {
      this.child2.personnelForm[x]=null }
    for (let x in this.child3.personnelForm) {
      this.child3.personnelForm[x]=null }
    for (let x in this.child4.personnelForm) {
      this.child4.personnelForm[x]=null }
  }

  
}
