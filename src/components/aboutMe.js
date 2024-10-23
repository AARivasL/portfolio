import Image from "next/image";
import '../app/styles/styles.css';

export default function AboutMe({ aboutMeRef }) {
    return (
      <div ref={aboutMeRef} className="bg-blue-950 min-h-80 p-8 ">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-4xl font-extrabold text-center text-white"> Aarón Alejandro Rivas Luna </div>
            <div className="text-3xl font-bold text-left text-white p-4"> Full Stack Developer </div>
            <div className="text-2xl font-normal text-justify text-white p-1">
            Soy un Ingeniero de Sistemas con valores basados en el 
            respeto, la disciplina y la responsabilidad conmigo mismo y
            con lo que me rodea. Comprometido con lo que se me pide 
            para lograr los objetivos y obtener resultados positivos. 
            Capaz de crear un ambiente de confianza y empatía a 
            través de una comunicación asertiva.
            </div>


          </div>

          <div className="flex justify-center items-center">
            <Image 
              src = "/Aaron Rivas.jpg"
              alt = "Ingeniero Aarón Rivas"
              width={300}
              height={250}
              className="image"
            />
          </div>

        </div>
      </div>
    );
  }
  