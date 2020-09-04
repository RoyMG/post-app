import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: 'app-container', component: AppContainerComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: '', redirectTo: 'app-container', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
