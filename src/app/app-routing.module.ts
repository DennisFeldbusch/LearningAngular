import { NgModule } from '@angular/core';
import { Routes, RouterModule , CanActivate} from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './service/auth_guard.service';

export const routes: Routes = [
  // bei /login kommt man bei der Login Seite raus
  {path: 'login', component: LoginComponent},
  // wenn man kein EP angibt wird man zur Table Seite weitergeleitet, sofern man angemeldet ist
  // ansonsten kommt man zur Login Seite (ist im AuthGuard implementiert)
  {path: '', component: TableComponent /*, canActivate: [AuthGuard]*/},
  {path: 'table', component: TableComponent /*, canActivate: [AuthGuard]*/},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
