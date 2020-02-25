import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class MaterialDesignModule {
  static forRoot(): MatDialogModule {
    return {
      ngModule: MaterialDesignModule,
      providers: [ MatDialogRef ],
      useValue: {}
    };
  }
 }
