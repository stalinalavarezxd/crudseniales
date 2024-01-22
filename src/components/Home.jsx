import React from "react";
import appFirebaseLogin from "../credencialesConfigLog";
import { getAuth,signOut } from "firebase/auth";
const auth = getAuth(appFirebaseLogin)

const Home = ({correoUsuario}) => {
    return(
        <div>
<h2 className="text-center">Bienvenido {correoUsuario} <button className="btn btn-primary" onClick={()=> signOut(auth)}>cerrar sesión</button></h2>
        </div>
    )
}
export default Home