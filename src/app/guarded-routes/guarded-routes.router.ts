import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardedRoutesComponent } from './guarded-routes.component';
import { RouterComponent } from './router/router.component';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { RouterDeactivateComponent } from './router-deactivate/router-deactivate.component';
class UserToken { }
class Permission {
	canActivated(user: UserToken, id: string): boolean {
		return true;
	}
}

class Permissions {
	canActivate(user: UserToken, id: string): boolean {
		return false;

	}
}
@Injectable()
class CanActivateTeam implements CanActivate {
	constructor(private permissions: Permissions, private currentUser: UserToken) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.permissions.canActivate(this.currentUser, route.params.id);
	}

}


const Routes: Routes = [
	{ path: 'example', component: RouterComponent },
	{ path: 'ex', component: RouterDeactivateComponent, canActivate: [CanActivateTeam] },
	{ path: '', component: GuardedRoutesComponent },

];

@NgModule({
	imports: [
		RouterModule.forChild(Routes)
	],
	providers: [
		CanActivateTeam, UserToken, Permissions,
	],
	exports: [
		RouterModule
	]
})
export class GuardedRouter { }