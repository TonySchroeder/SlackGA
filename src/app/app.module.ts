import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MatCardModule } from '@angular/material/card';
import { MessageContainerComponent } from './displaydata/message-container/message-container.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { SlackComponent } from './slack/slack.component';
import { WriteMessageComponent } from './write/write-message/write-message.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DialogAddChannelComponent } from './dialog/dialog-add-channel/dialog-add-channel.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignupComponent } from './signup/signup.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ThreadContainerComponent } from './displaydata/thread-container/thread-container.component';
import { ChannelContainerComponent } from './displaydata/channel-container/channel-container.component';
import { AllChannelContainerComponent } from './displaydata/all-channel-container/all-channel-container.component';
import { FilterChannelsPipe } from './pipe/filter-threads.pipe';
import { FilterThreadsPipe } from './pipe/filter-answers.pipe';
import { FilterUsersPipe } from './pipe/filter-users.pipe';
import { FilterChannelnamePipe } from './pipe/filter-channelname.pipe';
import { FilterSelectThreadPipe } from './pipe/filter-select-thread.pipe';
import { FilterNumberOfAnswersPipe } from './pipe/filter-number-of-answers.pipe';
import { FilterSelectChannelPipe } from './pipe/filter-select-channel.pipe';
import { FilterInitialenPipe } from './pipe/filter-initialen.pipe';
import { FilterMessageInterlocutorPipe } from './pipe/filter-message-interlocutor.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { DialogDeleteMessageComponent } from './dialog/dialog-delete-message/dialog-delete-message.component';
import { FilterMessageIdPipe } from './pipe/filter-message-id.pipe';
import { DialogDeleteThreadComponent } from './dialog/dialog-delete-thread/dialog-delete-thread.component';
import { DialogDeleteAnswerComponent } from './dialog/dialog-delete-answer/dialog-delete-answer.component';
import { QuillModule } from 'ngx-quill';
import { DateAgoPipe } from './pipe/date-ago.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserInitialenComponent } from './user-initialen/user-initialen.component';
import { FilterUserMailPipe } from './pipe/filter-user-mail.pipe';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from "./shared/services/auth.service";
import { ScrollToBottomDirective } from './scroll/scroll-to-bottom.directive';


@NgModule({
  declarations: [
    AppComponent,
    LeftContainerComponent,
    RightContainerComponent,
    MainContainerComponent,
    MessageContainerComponent,
    LoginComponent,
    SlackComponent,
    WriteMessageComponent,
    DialogAddChannelComponent,
    SignupComponent,
    LoginScreenComponent,
    ThreadContainerComponent,
    ChannelContainerComponent,
    AllChannelContainerComponent,
    FilterChannelsPipe,
    FilterThreadsPipe,
    FilterUsersPipe,
    FilterChannelnamePipe,
    FilterSelectThreadPipe,
    FilterNumberOfAnswersPipe,
    FilterSelectChannelPipe,
    FilterInitialenPipe,
    FilterMessageInterlocutorPipe,
    DialogDeleteMessageComponent,
    FilterMessageIdPipe,
    DialogDeleteThreadComponent,
    DialogDeleteAnswerComponent,
    DateAgoPipe,
    UserDetailsComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserInitialenComponent,
    FilterUserMailPipe,
    ScrollToBottomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    TextFieldModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    QuillModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [ AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
