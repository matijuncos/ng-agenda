import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then((m) => m.AuthModule),
	},
	{
		path: '',
		loadChildren: () =>
			import('./tasks/tasks.module').then((m) => m.TasksModule),
		canLoad: [AuthGuard],
		canActivate: [AuthGuard],
	},
	{ path: '**', redirectTo: 'auth' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
