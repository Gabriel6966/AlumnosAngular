# Plantilla Angular de alumnos

Esta plantilla se basa en el flujo de `angularextras`: `models`, `service`, `environments`, componentes con `@ViewChild` cuando corresponde, `HttpClient`, `Observable` y `subscribe({ next, error })`.

## Importante: API no incluida

**No existe una API de alumnos conectada a esta plantilla.** La URL `http://localhost:3000/` y los endpoints del servicio son **ejemplos**, no una API verificada. La compilación no se ha podido verificar aquí; además, los listados, login, perfil y matrícula solo tendrán datos y funcionarán cuando conectes una API compatible y ajustes sus respuestas. No uses una API de otro dominio con modelos de alumnos porque devolverá estructuras distintas.

## Para adaptarla al examen

1. Cambia `urlApiAlumnos` en `src/environments/environment.development.ts` y `environment.ts`.
2. Revisa las rutas de `src/app/service/service.alumnos.ts` (todos los endpoints son de ejemplo).
3. Ajusta `src/app/models/Alumno.ts`, `Observacion.ts`, `Matricula.ts` y `Usuario.ts` a las propiedades reales de la API.
4. Adapta nombres de los parámetros de las rutas (`:curso`, `:idAlumno`) si el profesor los cambia.
5. Ajusta el JSON del login y el campo `data.response` según el endpoint real.
6. Para mantener el código sencillo, el servicio devuelve `Observable<...>` y el componente hace `subscribe()`.

## Ejemplos

- Endpoint de ruta `GET api/Alumnos/{idAlumno}`: `this.url + 'api/Alumnos/' + id`.
- Filtro de ruta `GET api/Alumnos/Curso/{curso}`: `this.url + 'api/Alumnos/Curso/' + curso`.
- Si el endpoint exige query params (`?curso=...`), cambiar a `this._http.get(url, { params: { curso } })`.

## Ejecutar

`npm install` y `npm start`.
