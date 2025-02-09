import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'profile',component:StudentProfileComponent},
    {path:'quiz',component:QuizComponent}
];
