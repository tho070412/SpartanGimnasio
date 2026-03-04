import Card from "./Card";

function Cards() {
  return (
    <div className="cards-container">
      <Card
        title="Entrenamiento Personalizado"
        description="Planes diseñados para maximizar tu rendimiento."
      />
      <Card
        title="Zona de Pesas"
        description="Equipos modernos y profesionales."
      />
      <Card
        title="Clases Grupales"
        description="Spinning, funcional, cross training y más."
      />
    </div>
  );
}

export default Cards;