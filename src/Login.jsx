import './Login.css';

function Login() {
    return (
        <div className="padre">
            <div className="login">
                <h1>Ingresa a MyBeautyCorea</h1>
                <div className="correo">
                    <input type="text" id="correo" placeholder=" " />
                    <label htmlFor="correo">Correo</label>
                </div>
                <div className="contra">
                    <input type="password" id="contra" placeholder=" " />
                    <label htmlFor="contra">Contraseña</label>
                </div>
                <button className="boton">Iniciar Sesión</button>
                <div className="notienes">
            <span>¿No tienes cuenta? Registrate</span>
         </div>
            </div>
        </div>
    );
}

export default Login;