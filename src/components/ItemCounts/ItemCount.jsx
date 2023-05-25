import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, inicial, agregar })=> {
  const [cantidad, setCantidad] = useState(inicial)
  
  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className="counter">
      <div className="controls">
        <button className="button" onClick={decrementar}>
          -
        </button>
        <h3 className="number">{cantidad}</h3>
        <button className="button" onClick={incrementar}>
          +
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => agregar(cantidad)}
          disabled={!stock}
        >
          {" "}
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
