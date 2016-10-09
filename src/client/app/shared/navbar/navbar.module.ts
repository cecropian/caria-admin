import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [MaterialModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})

export class NavbarModule { }
