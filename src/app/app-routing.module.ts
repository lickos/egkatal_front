import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KataxorisiComponent } from './pages/kataxorisi/kataxorisi.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kataxorisi', component: KataxorisiComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]; // redirect to `Home`];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
