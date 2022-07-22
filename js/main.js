const carrito = [];

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(producto);
}

agregarAlCarrito({id: 1, type: 'llavero', name: 'Metallica', precio: 150})
agregarAlCarrito({id: 2, type: 'llavero', name: 'Maiden', precio: 100})
agregarAlCarrito({id: 3, type: 'llavero', name: 'Ac/dc', precio: 100})
agregarAlCarrito({id: 4, type: 'llavero', name: 'Motorhead', precio: 100})
agregarAlCarrito({id: 5, type: 'llavero', name: 'Blondie', precio: 100})

function borrarProductoDelCarrito(idDelProducto){
    const index = carrito.findIndex((producto) => producto.id === idDelProducto);

    if(index !== -1) {
        carrito.splice(index, 1);
}
console.log(carrito); 
}

borrarProductoDelCarrito(5)
