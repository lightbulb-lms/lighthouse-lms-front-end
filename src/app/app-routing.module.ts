import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular';
import {LoginComponent} from './component/login/login.component';
import {ProtectedComponent} from './component/protected/protected.component';
import {HomeComponent} from './component/home/home.component';
import {StudentHomePageComponent} from "./component/student-home-page/student-home-page.component";
import {TeacherHomePageComponent} from "./component/teacher-home-page/teacher-home-page.component";
import {AdministratorHomePageComponent} from "./component/administrator-home-page/administrator-home-page.component";


const routes: Routes = [
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'student-login',
    component: StudentHomePageComponent
  },
  {
    path: 'teacher-login',
    component: TeacherHomePageComponent
  },
  {
    path: 'admin-login',
    component: AdministratorHomePageComponent
  }
];

export function onAuthRequired(oktaAuth, injector): void {
  const router = injector.get(Router);

  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
