import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: "",
    loadChildren: () =>
    import("./tabs/tabs.module").then(
      (m) => m.TabsPageModule
    ), },
  { path: 'login',  loadChildren: () =>
  import("./login/login.module").then(
    (m) => m.LoginPageModule
  ), },
  { path: 'register',  loadChildren: () =>
  import("./register/register.module").then(
    (m) => m.RegisterPageModule
  ), },
  { path: 'profile',  loadChildren: () =>
  import("./profile/profile.module").then(
    (m) => m.ProfilePageModule 
  ), },
  { path: 'edit-profile',  loadChildren: () =>
  import("./edit-profile/edit-profile.module").then(
    (m) => m.EditProfilePageModule
  ), },
  { path: 'main',  loadChildren: () =>
  import("./main/main.module").then(
    (m) => m.MainPageModule
  ), },
  { path: 'tabs',  loadChildren: () =>
  import("./tabs/tabs.module").then(
    (m) => m.TabsPageModule
  ), },
  { path: 'tab1',  loadChildren: () =>
  import("./tab1/tab1.module").then(
    (m) => m.Tab1PageModule
  ), },
  { path: 'tab2',  loadChildren: () =>
  import("./tab2/tab2.module").then(
    (m) => m.Tab2PageModule
  ), },
  { path: 'tab3',  loadChildren: () =>
  import("./tab3/tab3.module").then(
    (m) => m.Tab3PageModule
  ), },
  { path: 'feed',  loadChildren: () =>
  import("./feed/feed.module").then(
    (m) => m.FeedPageModule
  ), },
  { path: '**',  loadChildren: () =>
  import("./tabs/tabs.module").then(
    (m) => m.TabsPageModule
  ), },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
