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
export class UserToken { }
export class Permission {
	canActivated(user: UserToken, id: string): boolean {
		return true;
	}
}

export class Permissions {
	canActivate(user: UserToken, id: string): boolean {
		return false;

	}
}
@Injectable()
export class CanActivateTeam implements CanActivate {
	constructor(private permissions: Permissions, private currentUser: UserToken) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.permissions.canActivate(this.currentUser, route.params.id);
	}

}


export const routes: Routes = [{
		path: '', component: GuardedRoutesComponent,
		children: [{ path: 'example', component: RouterComponent },
		{ path: 'ex', component: RouterDeactivateComponent, canActivate: [CanActivateTeam] },]
	},
	


];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	providers: [
		CanActivateTeam, UserToken, Permissions,
	],
	exports: [
		RouterModule
	]
})
export class GuardedRouter { }
