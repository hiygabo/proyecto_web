import './Ofertas.css';

const productos = [
    {
        id: 1,
        nombre: 'ALOE VERA 93% SOOTHING GEL',
        imagen1: 'public/d1.png',
        imagen2: 'public/d11.png',
        precio: '120 Bs.',
        descuento: '80 Bs.'
    },
    {
        id: 2,
        nombre: 'AVOCADO & SUGAR LIP SCRUB',
        imagen1: 'public/m222.png',
        imagen2: 'public/m22.png',
        precio: '80 Bs.',
        descuento: '60 Bs.'
    },
    {
        id: 3,
        nombre: 'AVOCADO LIP BALM STICK',
        imagen1: 'public/m3.png',
        imagen2: 'public/m33.png',
        precio: '75 Bs.',
        descuento: '35 Bs.'
    },
    {
        id: 4,
        nombre: 'SOUS VIDE MASK SHEET',
        imagen1: 'public/d2.png',
        imagen2: 'public/d22.png',
        precio: '100 Bs.',
        descuento: '70 Bs.'
    },
    {
        id: 5,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (15g)',
        imagen1: 'public/m5.png',
        imagen2: 'public/m55.png',
        precio: '90 Bs.',
        descuento: '60 Bs.'
    },
    {
        id: 6,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (5g)',
        imagen1: 'public/m6.png',
        imagen2: 'public/m66.png',
        precio: '50 Bs.',
        descuento: '20 Bs.'
    },
    {
        id: 7,
        nombre: 'SALMON DARK CIRCLE CONCEALER CREAM',
        imagen1: 'public/m7.png',
        imagen2: 'public/m77.png',
        precio: '120 Bs.',
        descuento: '80 Bs.'
    },
    {
        id: 8,
        nombre: 'MINT SPARKLING FOOT PEELING SOCKS',
        imagen1: 'public/d3.png',
        imagen2: 'public/d33.png',
        precio: '95 Bs.',
        descuento: '65 Bs.'
    }
];

const Ofertas = () => {
    return (
        <div className="maquillaje-container">
            <h1>Ofertas de la semana</h1>
            <p id='ofer'>Aprovecha las ofertas exclusivas de esta semana</p>
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
                            <p className='descuento'>{producto.descuento}</p>
                            <a href="#" className="producto-boton">Comprar</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ofertas;