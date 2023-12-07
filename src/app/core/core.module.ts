import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooterGridCellComponent } from './components/footer/footer-grid/footer-grid-cell/footer-grid-cell.component';
import { FooterGridContainerComponent } from './components/footer/footer-grid/footer-grid-container/footer-grid-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderAdminComponent } from './components/header/header-admin/header-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { EnsureModuleLoadedOnceGuard } from './guards/module-loaded-once/ensure-module-loaded-once';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderAdminComponent,
    FooterComponent,
    MenuComponent,
    ModalComponent,
    NotFoundComponent,
    FooterGridCellComponent,
    FooterGridContainerComponent,
  ],
  imports: [CoreRoutingModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, ModalComponent],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
