import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';

export const routes: Routes = [
    { path:'', component: LoginComponent},
    { path:'login', component: LoginComponent},
    { path:'welcome/:name',component:WelcomeComponent},
    { path:'todos',component:ListToDosComponent},
    { path:'**',component:ErrorComponent},
    
];
