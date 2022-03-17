import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { AboutComponent } from './about/about.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contenido', component: ContenidoComponent},
  { path: 'about', component: AboutComponent},
  { path: 'detalle', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
