import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSortModule,
  MatTableModule, MatTabsModule,
  MatPaginator, MatSort, MatTableDataSource
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
