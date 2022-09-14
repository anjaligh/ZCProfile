import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentsComponent } from './assessments/assessments.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DocumentsComponent } from './documents/documents.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { ProfileComponent } from './profile/profile.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SideProfileComponent } from './side-profile/side-profile.component';

const routes: Routes = [
  {path:'', component:ProfileComponent},
  {path:'middle',component:MiddleSectionComponent,children:[
    {path:'assessments', component:AssessmentsComponent},
    {path:'chatbot', component:ChatbotComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'reminders',component:RemindersComponent}
  ]},
  {path:'sideprofile',component:SideProfileComponent},
  {path:'documents',component:DocumentsComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
