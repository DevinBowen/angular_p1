import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@NgModule({
  imports: [
    CommonModule, 
    // other modules
  ],
  // ... rest of your module 
})
export class YourModule { } 

export interface Hero {
    id: number;
    name: string;
}