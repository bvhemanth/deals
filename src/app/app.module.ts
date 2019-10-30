import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { SortPipe } from './shared/sort.pipe';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { MapsComponent } from './maps/maps.component';

import { DialogService } from './services/dialog.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule,MAT_DIALOG_DATA } from '@angular/material';
import { StripepaymentComponent } from './stripepayment/stripepayment.component';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    SortPipe,
    NopagefoundComponent,
    MapsComponent,
    StripepaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [SortPipe,DialogService],
  bootstrap: [AppComponent],
  entryComponents: [ MapsComponent ]
})
export class AppModule { }
