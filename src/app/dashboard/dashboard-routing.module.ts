import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WaiterComponent } from './waiter/waiter.component';
import { KitchenComponent } from './kitchen/kitchen.component';

const routes: Routes = [
  {path: 'admin', component:AdminComponent},
  {path: 'waiter', component:WaiterComponent},
  {path: 'kitchen', component:KitchenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
