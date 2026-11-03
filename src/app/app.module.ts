import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceAlumnos } from './service/service.alumnos';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MatricularComponent } from './components/matricular/matricular.component';
@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, AlumnosComponent, DetallesComponent, LoginComponent, PerfilComponent, MatricularComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ServiceAlumnos, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}
