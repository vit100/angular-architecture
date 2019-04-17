import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/planning' },
  { path: 'features-modules', loadChildren: 'app/features-modules/features-modules.module#FeaturesModulesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

