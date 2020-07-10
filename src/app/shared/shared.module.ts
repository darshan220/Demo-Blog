import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({

  imports: [
    CommonModule,
    MaterialModule,FormsModule,RouterModule
  ],
  exports:[
    CommonModule,
    MaterialModule,
    NavbarComponent,RouterModule,FormsModule
  ],
  declarations: [NavbarComponent]
})
export class SharedModule { }
