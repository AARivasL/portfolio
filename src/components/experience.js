

export default function Experience({ experienceRef }) {
  return (
    <div ref={experienceRef} className=" min-h-80 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-950 ">Experiencia</h1>
      <div className="grid grid-cols-1 grid-rows-2 gap-4">
        <p className="text-2xl font-bold text-left text-blue-950"> Enero 2023 -- Actualidad</p>
        <hr style={{ border: 'none', borderTop: '1px solid rgb(23 37 84)', margin: '2px 0' }} />
      </div>

    <div>
        <ul className="list-disc list-inside ejemplo rounded-lg transition-transform transform hover:scale-105"> 
          <p  className="text-2xl font-normal text-left pl-8 pb-5"> Bases de Datos </p>
          <li className="text-lg pl-20">
            Analicé, diseñé y creé bases de datos relacionales adaptadas a los requisitos del proyecto.
          </li>
          <li className="text-lg pl-20 pb-5 pt-5">
            Utilicé sistemas de gestión de bases de datos como MySQL y PostgreSQL para la creación, optimización de consultas y mantenimiento de bases de datos.
          </li>
        </ul>

        <ul className="list-disc list-inside ejemplo rounded-lg transition-transform transform hover:scale-105"> 
          <p  className="text-2xl font-normal text-left pl-8 p-5"> Backend </p>
          <li className="text-lg pl-20">
          En Laravel, desarrollé proyectos web utilizando arquitectura MVC. Diseñé y creé APIs REST para los proyectos en los que trabajé, ejecuté migraciones de bases de datos e implementé observers, controladores, modelos, vistas, etc., utilizando Eloquent ORM.
          </li>
          <li className="text-lg pl-16 pb-5 pt-5">
          En Python, trabajé con expresiones lambda y estructuras de datos.
          </li>
        </ul>

        <ul className="list-disc list-inside ejemplo rounded-lg transition-transform transform hover:scale-105"> 
          <p  className="text-2xl font-normal text-left pl-8 p-5"> Frontend </p>
          <li className="text-lg pl-20 pb-5">
              Creé y actualicé módulos usando Angular, HTML, CSS, Bootstrap y TypeScript. También implementé gráficos 2D personalizados con la biblioteca Chart.js.
          </li>
        </ul>
    </div>
    <hr style={{ border: 'none', borderTop: '1px solid rgb(23 37 84)', margin: '2px 0' }} />
    </div>
  );
}
