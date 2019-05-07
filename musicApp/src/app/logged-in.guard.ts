
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { SignUpComponent} from 

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(){
        // console.log("Got Here");
        // next: ActivatedRouteSnapshot,
        // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        //     let username = localStorage.getItem("user");
        //     if(username === next.params.username){
            return true;
        //     }
        //     this.router.navigate(['/login']);
        //     return false;
    
    }
   
}



// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (localStorage.getItem('currentUser')) {
//         // logged in so return true
//         return true;
//     }

//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//     return false;
// }