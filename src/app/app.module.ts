import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { LoginComponent } from './login/login.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { MateriasComponent } from './materias/materias.component';
import { NotasComponent } from './notas/notas.component';
import { PaginaNoFuncionaComponent } from './pagina-no-funciona/pagina-no-funciona.component';
import{RouterModule} from'@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AlumnosComponent,
    LoginComponent,
    MaestrosComponent,
    MateriasComponent,
    NotasComponent,
    PaginaNoFuncionaComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
