import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];
  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      roomName: ['', Validators.required]
      // Add more form controls as needed
    });
  }

  ngOnInit() {
    // Initialize any existing rooms
    this.addRoom();
  }

  addRoom() {
    const newRoom = {
      id: this.rooms.length + 1,
      name: `Room ${this.rooms.length + 1}`, // Generate unique room name
      // Add additional properties as needed
    };
    this.rooms.push(newRoom);
  }

  removeRoom(roomId: number) {
    this.rooms = this.rooms.filter(room => room.id !== roomId);
  }
}
