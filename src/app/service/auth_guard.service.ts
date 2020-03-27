import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthenticationService, public router: Router) { }


    canActivate(): boolean {

        // checks if the user is logged in
        if (this.auth.isUserLoggedIn()) {

            // User is logged in
            return true;

        } else {

            // User is NOT logged in
            // will be rerouted to the login page
            this.router.navigate(['/login']);

            return false;

        }

    }
}