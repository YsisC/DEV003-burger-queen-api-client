import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './admin/admin.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { WaiterComponent } from './waiter/waiter.component';



@NgModule({
  declarations: [
 AdminComponent,
 KitchenComponent,
 WaiterComponent

  ],
  imports: [
   CommonModule,
   DashboardRoutingModule
 
  ]
})
export class DashboardModule { }
