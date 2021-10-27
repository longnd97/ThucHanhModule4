import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadListComponent } from './book/read-list/read-list.component';
import { ReadedListComponent } from './book/readed-list/readed-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'read-list',
    component: ReadListComponent,
  },
  {
    path: 'readed-list',
    component: ReadedListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
