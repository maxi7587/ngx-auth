// USED BY ALL COLMENA (authed, core, guest, etc)
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatTabsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        CdkTableModule
    ],
    exports: [
        MatFormFieldModule,
        MatTabsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        CdkTableModule
    ],
})
export class AuthMaterialModule {}
