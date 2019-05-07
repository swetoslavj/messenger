import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessengerComponent } from './components/messenger/messenger.component';
import { MessengerResolver } from './core/resolvers/messenger.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/messenger'
  },
  {
    path: 'messenger',
    component: MessengerComponent,
    resolve: { messengerData: MessengerResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
