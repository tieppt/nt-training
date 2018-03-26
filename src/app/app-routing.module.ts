import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }, {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  }, {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
