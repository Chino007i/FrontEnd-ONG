import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { MateriaService } from './materia.service';
import { MateriasComponent } from './materias/materias.component';
import { NotasComponent } from './notas/notas.component';
import { PaginaNoFuncionaComponent } from './pagina-no-funciona/pagina-no-funciona.component';


const routes: Routes = [
{path:'',component : LoginComponent},
{path:'Inicio',component : InicioComponent},
{path:'alumnos',component : AlumnosComponent},
{path:'maestro',component : MaestrosComponent},
{path:'materia',component : MateriasComponent},
{path:'notas',component : NotasComponent},
{path:'PaginaNoFunciona',component : PaginaNoFuncionaComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
