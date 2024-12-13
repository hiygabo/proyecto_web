import './Maquillaje.css';

const productos = [
    {
        id: 1,
        nombre: 'AVOCADO & OLIVE LIP BALM',
        imagen1: 'public/m1.png',
        imagen2: 'public/m11.png',
        precio: '120 Bs.'
    },
    {
        id: 2,
        nombre: 'AVOCADO & SUGAR LIP SCRUB',
        imagen1: 'public/m222.png',
        imagen2: 'public/m22.png',
        precio: '80 Bs.'
    },
    {
        id: 3,
        nombre: 'AVOCADO LIP BALM STICK',
        imagen1: 'public/m3.png',
        imagen2: 'public/m33.png',
        precio: '75 Bs.'
    },
    {
        id: 4,
        nombre: 'BUTTERY CHEEK CAKE TWIN',
        imagen1: 'public/m4.png',
        imagen2: 'public/m44.png',
        precio: '100 Bs.'
    },
    {
        id: 5,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (15g)',
        imagen1: 'public/m5.png',
        imagen2: 'public/m55.png',
        precio: '90 Bs.'
    },
    {
        id: 6,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (5g)',
        imagen1: 'public/m6.png',
        imagen2: 'public/m66.png',
        precio: '50 Bs.'
    },
    {
        id: 7,
        nombre: 'SALMON DARK CIRCLE CONCEALER CREAM',
        imagen1: 'public/m7.png',
        imagen2: 'public/m77.png',
        precio: '120 Bs.'
    },
    {
        id: 8,
        nombre: 'TOMATO JELLY TINT LIP',
        imagen1: 'public/m8.png',
        imagen2: 'public/88.png',
        precio: '95 Bs.'
    }
];

const Maquillaje = () => {
    return (
        <div className="maquillaje-container">
            <h1>Productos de Maquillaje</h1>
            <p id='maqui'>Encuentra los mejores productos de maquillaje basados en la experiencia de nuestros clientes.</p>
            <div className="productos-grid">
                {productos.map(producto => (
                    <div key={producto.id} className="producto-card">
                        <div className="producto-imagen">
                            <img src={producto.imagen1} alt={producto.nombre} className="primary" />
                            <img src={producto.imagen2} alt={producto.nombre} className="secondary" />
                        </div>
                        <div className="producto-info">
                            <h2>{producto.nombre}</h2>
                            <p>Descripción del producto</p>
                            <p className="producto-precio">{producto.precio}</p>
                            <a href="#" className="producto-boton">Comprar</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Maquillaje;