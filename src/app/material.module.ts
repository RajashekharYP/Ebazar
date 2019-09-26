import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,
  MatToolbarModule, MatMenuModule, MatProgressSpinnerModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTableModule,
    MatMenuModule,
    MatSliderModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
})
export class CustomMaterialModule { }
