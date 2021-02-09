import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { FriendsComponent } from './friends/friends.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';
import { GroupsComponent } from './groups/groups.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ParticularResolutionComponent } from './particular-resolution/particular-resolution.component';
import { EditResolutionComponent } from './edit-resolution/edit-resolution.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    HeaderComponent,
    LogInComponent,
    ProfileComponent,
    SettingsPageComponent,
    FriendsComponent,
    ResolutionsComponent,
    GroupsComponent,
    ProfileHeaderComponent,
    ParticularResolutionComponent,
    EditResolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
