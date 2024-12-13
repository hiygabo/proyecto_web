import './Productos.css';

function Productos() {
    return (
        <>
            <h3 className="titulo-productos">PRODUCTOS HECHOS PARA TÍ</h3>
            <div className="p">
                <div className="img1">
                    <div className="image-container">
                        <img src="c1.png" alt="Producto 1" className="primary" />
                        <img src="public/c1-hover.png" alt="Producto 1 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        BLUE CHAMOMILE HYALURONIC CREAM <br />Bs.250
                    </div>
                </div>
                <div className="img2">
                    <div className="image-container">
                        <img src="public/c2.jpg" alt="Producto 2" className="primary" />
                        <img src="public/c2-hover.png" alt="Producto 2 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        VEGE GARDEN CLEANSING FOAM WILD BERRY <br />Bs.200
                    </div>
                </div>
                <div className="img3">
                    <div className="image-container">
                        <img src="public/c3.jpg" alt="Producto 3" className="primary" />
                        <img src="public/c3-hover.png" alt="Producto 3 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        EGG WHITE CLEANSING FOAM <br />Bs.320
                    </div>
                </div>
                <div className="img4">
                    <div className="image-container">
                        <img src="public/c4.png" alt="Producto 4" className="primary" />
                        <img src="public/c4-hover.png" alt="Producto 4 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        RICE DAILY BRIGHTENING <br />Bs.220
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productos;