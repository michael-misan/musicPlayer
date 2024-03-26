import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { TracksPage } from './tracks/tracks.page'
import { VideoPage } from './video/video.page'
import { FavoriteTracksPage } from './favorite.tracks/favorite.tracks.page'
import { RadioPage } from './radio/radio.page'
// import { BloodPressurePage } from './blood.pressure/blood.pressure.page'
import { TablePage } from './table/table.page'


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    TracksPage,
    VideoPage,
    FavoriteTracksPage,
    RadioPage,
    // BloodPressurePage,
    TablePage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicModule.forRoot({}), FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

