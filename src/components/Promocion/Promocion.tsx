import './Promocion.css'

type PromocionProps = {
  estadoActual: string;
}

export const Promocion = ({estadoActual} : PromocionProps) => {
  return (
    <div className={`promocion${estadoActual}`}>
      <span>
        <strong>¡No te pierdas nuestras ofertas especiales!</strong> Descubre descuentos exclusivos en productos seleccionados. ¡Aprovecha ahora y ahorra en tus compras!
      </span>
    </div>
  );
}
