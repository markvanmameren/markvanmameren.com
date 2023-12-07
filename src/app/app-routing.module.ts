import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  // lazy-loading for feature modules
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./modules/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./modules/calculator/calculator.module').then(
        (m) => m.CalculatorModule
      ),
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./modules/my-profile/my-profile.module').then(
        (m) => m.MyProfileModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  // homepage and 404
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Page Not Found',
  },
  { path: '**', redirectTo: 'not-found' },
];

const config: ExtraOptions = {
  scrollPositionRestoration: 'top',
  scrollOffset: [0, 100], // accounts for fixed header
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
})
export class AppRoutingModule {}
