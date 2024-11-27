import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchInputFormComponent } from './COMPONENT/branch-input-form/branch-input-form.component';
import { BranchInputFormUpdateComponent } from './COMPONENT/branch-input-form-update/branch-input-form-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  // {
  //   path: 'branch',
  //   component: BranchInputFormComponent,
  //   //Lazy loading
  // },
  {
    path: 'branch',
    component: BranchInputFormUpdateComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
