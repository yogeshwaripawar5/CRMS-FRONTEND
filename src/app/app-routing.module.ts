import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchInputFormComponent } from './COMPONENT/branch-input-form/branch-input-form.component';
import { BranchInputFormUpdateComponent } from './COMPONENT/branch-input-form-update/branch-input-form-update.component';
import { LoginComponent } from './login/login.component';
import { RoViewComponent } from './COMPONENT/ro-view/ro-view.component';
import { HeaderComponent } from './COMPONENT/header/header.component';
import { BranchSavedComponent } from './COMPONENT/branch-saved/branch-saved.component';
import { HoViewComponent } from './COMPONENT/ho-view/ho-view.component';
import { PagenotfoundComponent } from './COMPONENT/pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path: 'roView',
    component: RoViewComponent,
    //Lazy loading
  },
  {
    path: 'hoView',
    component: HoViewComponent,
    //   canActivate: [AuthGuard],
  },
  {
    path: 'branch',
    component: BranchInputFormUpdateComponent,
    //Lazy loading
  },
  {
    path: 'header',
    component: HeaderComponent,
    //Lazy loading
  },
  {
    path: 'login',
    component: LoginComponent,
    //Lazy loading
  },
  // {
  //   path: '',
  //   redirectTo: 'branch',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // {
  //   path: 'header',
  //   component: HeaderComponent,
  //   // canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'branch',
  //       component: BranchInputFormUpdateComponent,
  //       ////     canActivate: [AuthGuard],
  //     },
  //     {
  //       path: 'roView',
  //       component: RoViewComponent,
  //       //   canActivate: [AuthGuard],
  //     },
  //     {
  //       path: 'hoView',
  //       component: HoViewComponent,
  //       //   canActivate: [AuthGuard],
  //     },
  //     {
  //       path: 'save',
  //       component: BranchSavedComponent,
  //       //   canActivate: [AuthGuard],
  //     },
  //     {
  //       path: '**',
  //       component: PagenotfoundComponent,
  //       //     canActivate: [AuthGuard],
  //     },

  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
