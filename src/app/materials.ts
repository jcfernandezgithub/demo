import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule],
})
export class MaterialModule { }
