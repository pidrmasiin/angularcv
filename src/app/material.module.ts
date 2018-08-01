import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatMenuModule, 
  MatCardModule, 
  MatGridListModule, 
  MatIconModule, 
  MatExpansionModule,
  MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatCardModule, 
    MatGridListModule, 
    MatIconModule, 
    MatExpansionModule,
    MatTableModule],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatCardModule, 
    MatGridListModule, 
    MatIconModule,
    MatExpansionModule,
    MatTableModule],
})
export class MaterialModule { }