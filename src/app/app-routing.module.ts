import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TracksPage } from './tracks/tracks.page'
import { VideoPage } from './video/video.page'
import { FavoriteTracksPage } from './favorite.tracks/favorite.tracks.page'
import { RadioPage } from './radio/radio.page'
// import { BloodPressurePage } from './blood.pressure/blood.pressure.page'
import { TablePage } from './table/table.page'

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'tracks',
    component: TracksPage
  },
  {
    path: 'video',
    component: VideoPage
  },
  {
    path: 'favorite.tracks',
    component: FavoriteTracksPage
  },
  {
    path: 'radio',
    component: RadioPage
  },
  // {
  //   path: 'blood.pressure',
  //   component: BloodPressurePage
  // },
  { 
    path: 'table', 
    component: TablePage
    // path: 'table/:firstName/:lastName/:age/:pressure/:pressure_2', 
    // component: TablePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


