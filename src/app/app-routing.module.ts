import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const indexRoutes: Route = {
  path: '',
  component: DashboardComponent,
};

const fallBackRoutes: Route = {
  path: '**',
  component: DashboardComponent,
};
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  indexRoutes,
  fallBackRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
