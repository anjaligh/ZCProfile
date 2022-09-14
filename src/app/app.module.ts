import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { SideProfileComponent } from './side-profile/side-profile.component';
import { DocumentsComponent } from './documents/documents.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RemindersComponent } from './reminders/reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    MiddleSectionComponent,
    AssessmentsComponent,
    ChatbotComponent,
    SideProfileComponent,
    DocumentsComponent,
    FeedbackComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
