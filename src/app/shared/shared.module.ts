import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { GridCellComponent } from './components/grid/grid-cell/grid-cell.component';
import { GridContainerComponent } from './components/grid/grid-container/grid-container.component';
import { ImageGridCellComponent } from './components/image-grid/image-grid-cell/image-grid-cell.component';
import { ImageGridContainerComponent } from './components/image-grid/image-grid-container/image-grid-container.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { LoginformComponent } from './components/login/loginform/loginform.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterformComponent } from './components/register/registerform/registerform.component';
import { TableComponent } from './components/table/table.component';
import { TypewriterBoxComponent } from './components/typewriter-box/typewriter-box.component';
import { WordGridCellComponent } from './components/word-grid/word-grid-cell/word-grid-cell.component';
import { WordGridContainerComponent } from './components/word-grid/word-grid-container/word-grid-container.component';
import { ReplaceCharactersPipe } from './pipes/replace-characters.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    LoginformComponent,
    RegisterComponent,
    RegisterformComponent,
    GridContainerComponent,
    GridCellComponent,
    WordGridCellComponent,
    WordGridContainerComponent,
    ImageGridCellComponent,
    ImageGridContainerComponent,
    ErrorMessageComponent,
    ReplaceCharactersPipe,
    TableComponent,
    LoaderComponent,
    TypewriterBoxComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    LoginComponent,
    LoginformComponent,
    RegisterComponent,
    RegisterformComponent,
    GridContainerComponent,
    GridCellComponent,
    WordGridCellComponent,
    WordGridContainerComponent,
    ImageGridCellComponent,
    ImageGridContainerComponent,
    ErrorMessageComponent,
    FontAwesomeModule,
    ReplaceCharactersPipe,
    TableComponent,
    TypewriterBoxComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
