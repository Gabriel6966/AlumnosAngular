import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import Alumno from '../models/Alumno';
import Observacion from '../models/Observacion';
import Matricula from '../models/Matricula';
import Usuario from '../models/Usuario';
import Login from '../models/Login';

@Injectable({ providedIn: 'root' })
export class ServiceAlumnos {
  url = environment.urlApiAlumnos;

  constructor(private _http: HttpClient) {}

  // Endpoints de EJEMPLO: ajustar según la documentación real de la API.
  getAlumnos(): Observable<Alumno[]> {
    return this._http.get<Alumno[]>(this.url + 'api/Alumnos');
  }

  getCursos(): Observable<string[]> {
    return this._http.get<string[]>(this.url + 'api/Alumnos/Cursos');
  }

  getAlumnosByCurso(curso: string): Observable<Alumno[]> {
    return this._http.get<Alumno[]>(this.url + 'api/Alumnos/Curso/' + curso);
  }

  getAlumnoById(id: number): Observable<Alumno> {
    return this._http.get<Alumno>(this.url + 'api/Alumnos/' + id);
  }

  getObservaciones(id: number): Observable<Observacion[]> {
    return this._http.get<Observacion[]>(this.url + 'api/Observaciones/Alumno/' + id);
  }

  getToken(login: Login): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<any>(this.url + 'api/Manage/Login', JSON.stringify(login), { headers: header });
  }

  getPerfil(): Observable<Usuario> {
    let header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('authToken'));
    return this._http.get<Usuario>(this.url + 'api/Manage/PerfilUsuario', { headers: header });
  }

  getMatriculas(): Observable<Matricula[]> {
    let header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('authToken'));
    return this._http.get<Matricula[]>(this.url + 'api/Matriculas/MisMatriculas', { headers: header });
  }

  matricularAlumno(id: number): Observable<any> {
    let header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('authToken'));
    return this._http.post(this.url + 'api/Matriculas/Matricular/' + id, null, { headers: header });
  }
}
