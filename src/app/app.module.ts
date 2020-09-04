import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { PostListComponent } from './post-list/post-list.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { ModalComponent } from './modal/modal.component';
import { PostService } from './post-list/post.service';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    PostListComponent,
    AppContainerComponent,
    ModalComponent,
    PostDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
