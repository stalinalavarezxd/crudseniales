import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './components/Lista'
import Form from './components/Form'
import ConsultaSeniales from './components/ConsultaSeniales'
import EditarSenial from './components/EditarSeniales'
import appFirebaseLogin from './credencialesConfigLog'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebaseLogin)
import Login from './components/Login'
import Home from './components/Home'
function App() {
  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFireBase) =>{
    if(usuarioFireBase){
      setUsuario(usuarioFireBase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
      <div className = "container"> 
        {usuario ? (
  <div>
    <Form correoUsuario={usuario.email} />
    <Lista />
    <ConsultaSeniales />
  </div>
) : (
  <Login />
)}
      </div>
  )
}

export default App
