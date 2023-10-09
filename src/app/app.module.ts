import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/pages/user/AllUser/profile/profile.component';
import { TimeTableComponent } from './component/pages/user/student/time-table/time-table.component';
import { SessionDetailComponent } from './component/pages/user/AllUser/session-detail/session-detail.component';
import { CheckAttendanceComponent } from './component/pages/user/student/check-attendance/check-attendance.component';
import { TakeAttendanceComponent } from './component/pages/user/lecturer/take-attendance/take-attendance.component';
import { ScheduleComponent } from './component/pages/user/lecturer/Schedule/schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TimeTableComponent,
    SessionDetailComponent,
    CheckAttendanceComponent,
    TakeAttendanceComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
