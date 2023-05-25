const producto = [
  {
    id: "1",
    name: "Zapatillas",
    precio: 1000,
    categoria: "1",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPI_Yc-B40iVtUEh2EOLYbMsYIqaDicybTCiXaxFxxwg&s",
    stock: 23,
    descripcion: "zapatillas para hombre lalalala",
  },
  {
    id: "2",
    name: "pantalones",
    precio: 3000,
    categoria: "2",
    imagen:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw12aa489f/products/PU_586749-01/PU_586749-01-1.JPG",
    stock: 10,
    descripcion: "pantalones para hombre lalalala",
  },
];

export const getProducto = () =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(producto)
        }, 500)
    })
}

export const getProductoById = (productoID) =>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(producto.find(prod => prod.id === productoID))
    }, 500)
  })
}


export const getProductoByCategoria = (idCategoria) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const productosCategoria = producto.filter(prod => prod.categoria === idCategoria);
          resolve(productosCategoria);
      }, 100)
  })
}