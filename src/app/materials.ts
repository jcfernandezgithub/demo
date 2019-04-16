import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatSortModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';


import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }
