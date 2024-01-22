import React, { useState } from "react";
import Imagen from "../assets/log2.jpg";
import ImagePro from "../assets/pro.png"
import appFirebaseLogin from "../credencialesConfigLog";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

const auth = getAuth(appFirebaseLogin)


const Login = () => {
    const [registrando, setRegistrando] = useState(false)
    const functAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)

            } catch (error) {
                alert("Asegurese que la contraseña tenga mas de 8 caracteres")
            }

        }
        else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);

            } catch (error) {
                alert("El correo o la contraseña son incorrectos")
            }
        }
    }

    return(
        <div className="container" >
            <div className="row">
                {/*Columna de formulario */}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImagePro} alt=""  className="estilo-profile"/>
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder="Ingresar Email" className="cajaTexto" id="email"/>
                                <input type="password" placeholder="Ingresar contraseña" className="cajaTexto" id="password"/>
                                <button className="btnForm">{registrando ? "Registrate" : "Inicia sesión"}</button>
                            </form>
                            <h4 className="texto">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className="btnswith" onClick={() => setRegistrando(!registrando)}>{registrando ? "inicia sesion" : "Registrate"}</button></h4>
                            
                        </div>
                    </div>

                </div>
                {/*columa de imagen*/}
                <div className="col-md-8">
                    <img src={Imagen} alt="" className="tamaño-imagen"/>

                </div>
            </div>
        </div>
    )
}
export default Login