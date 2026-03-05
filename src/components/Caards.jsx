import Card from "./Card";

function Cards() {
  return (
    <div className="cards-container">
      <Card
        title="Entrenamiento Personalizado"
        description="Diseñamos rutinas adaptadas a tu nivel fisico,objetivos y condicion corporal.Nuestros entrenadores certificados acompañan en cada sesion para garantizar resultados reales y progresivos"

      />
      <Card
        title="Zona de Pesas y Maquinas"
        description="Contamos con equipos modernos de musculacion,peso libre y maquinas especializadas para trabajar cada grupo muscular de manera segura y eficiente ."
      />
      <Card
        title="Clases Grupales"
        description="Ofrecemos clases dinamicas como spinning,entrenamiento funcional,HIIT y circuitos de resistencia que mejora tu rendimiento cardiovascular."
      />

      <Card
        title="Plan Nutricional"
        description="Asesoramiento nutricional personalizado para complementar tu entrenamiento y optimizar tu resultados fisicos de forma saludable y sostenible."
      />

      <Card
        title="Horarios Flexibles"
        description="Abrimos desde temprano en la mañana hasta la noche para adaptarnos a tu rutina diaria y facilitar la constancia en tu entrenamiento."
      />

      <Card
        title="Ambiente Motivador"
        description="Un espacio diseñado para inspirar disciplina y superacion,con musica,energia y una comunidad enfocada en el progreso constante ."
      />
    </div>
  );
}

export default Cards;