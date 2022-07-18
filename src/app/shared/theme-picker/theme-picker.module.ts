import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker.component';
import { StyleManagerService } from '../syle-manager/style-manager.service';
import { ThemeStorageService } from './theme-storage/theme-storage.service';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ThemePickerComponent],
  providers: [StyleManagerService, ThemeStorageService],
})
export class ThemePickerModule {}
