import '../app/styles/styles.css';

export default function Header({ scrollToAboutMe, scrollToExperience, scrollToTech, scrollToProjects  }) {
  return (
    <div className="bg-white p-2">
      <div className="grid grid-cols-4 gap-2">
        <button onClick={scrollToAboutMe} className="button text-1xl font-bold mb-8 text-white text-center">
          Acerca de mi
        </button>
        <button onClick={scrollToExperience} className="button text-1xl font-bold text-center mb-8 text-white">
          Experiencia
        </button>
        <button onClick={scrollToTech} className="button text-1xl font-bold text-center mb-8 text-white">
          Tecnologias
        </button>
        <button onClick={scrollToProjects} className="button text-1xl font-bold text-center mb-8 text-white">
          Proyectos
        </button>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid white', margin: '2px 0' }} />
    </div>
    
  );
}
