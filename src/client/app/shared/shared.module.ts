import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ToolbarModule } from './toolbar/toolbar.module';
import { NavbarModule } from './navbar/navbar.module';
import { NameListService } from './name-list/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  exports: [ToolbarModule, NavbarModule, MaterialModule,
    CommonModule, FormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
