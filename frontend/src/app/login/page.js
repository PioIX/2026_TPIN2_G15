"use client"

import { useState, useEffect } from 'react';
import Form from "@/components/Form"

export default function LoginPage() {
    const [register, setRegister] = useState(false);
    //  console.log({ email: email, password: password })


    const handleRegister = async (nombre, mail, contrasena, foto, num_telefono) => {
        console.log(nombre);
        console.log(mail);
        console.log(contrasena);
        console.log(foto);
        console.log(num_telefono);
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre: nombre, mail: mail, contrasena: contrasena, foto: foto, num_telefono: num_telefono })
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            {!register ? (
                <>
                    <Form title={"Iniciar sesion"} buttonText={"Iniciar sesion"} register={false}></Form>
                    <button onClick={() => setRegister(true)}>Quiero registrarme</button>
                </>
            ) : (
                <>
                    <Form title={"Registrarse"} buttonText={"Registrarse"} onButtonClick={handleRegister} register={true}></Form>
                    <button onClick={() => setRegister(false)}>Quiero inciar sesion</button>
                </>
            )}
        </div>
    )
}
