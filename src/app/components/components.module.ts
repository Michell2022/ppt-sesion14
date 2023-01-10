import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { Hijoppt15Component } from './hijoppt15/hijoppt15.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HijoComponent,
    Hijoppt15Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HijoComponent,
    Hijoppt15Component
  ]
})
export class ComponentsModule { }
