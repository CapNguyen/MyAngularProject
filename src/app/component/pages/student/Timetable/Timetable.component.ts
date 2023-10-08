import { Component, OnInit } from "@angular/core";
import {User} from 'src/app/models/User';
import {Group} from 'src/app/models/Group';
import {Session} from 'src/app/models/Session';

@Component({
  selector:'app-timetable',
  templateUrl:'./Timetable.component.html',
  styleUrls: ['./Timetable.component.css']
 })
 export class TimetableComponent implements OnInit {
  group!: Group;
  user!: User;
  session!:Session;
}
