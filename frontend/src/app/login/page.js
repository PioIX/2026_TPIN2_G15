"use client"
import Form from "@/components/Form"

export default function loginPage(){
    const handleLogin = (email, password)=>{
        if (email === "usuario@gmail.com" && password === "1234"){
            console.log("Inicio de sesion del usuario")
        } else{
            console.log("Email o contraseña incorrectos")
        }
    }
    
    return (
        <div>
            <Form title="Iniciar sesion" buttonText="Iniciar sesion" onButtonClick={handleLogin}/>
        </div>
    )
}