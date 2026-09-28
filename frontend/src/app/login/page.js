"use client"

import { useState, useEffect } from 'react';
import Form from "@/components/Form"

export default function LoginPage() {
    const [register, setRegister] = useState(false);
  //  console.log({ email: email, password: password })
    

    const handleRegister = async (username, email, password, photo) => {
        console.log(username);
        console.log(email); 
        console.log(password); 
        console.log(photo);
        const response = await fetch("http://localhost:4000/registro", {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({username: username, email: email, password:password, photo: photo})
        })
    }

    return (
        <div>
            {!register ?  (
                <>
                    <Form title={"Iniciar sesion"} buttonText={"Iniciar sesion"} register={false}></Form>
                    <button onClick={()=> setRegister(true)}>Quiero registrarme</button>
                </>
            ) : (
                <>
                    <Form title={"Registrarse"} buttonText={"Registrarse"} onButtonClick={handleRegister} register={true}></Form>
                    <button onClick={()=> setRegister(false)}>Quiero inciar sesion</button>
                </>
            )}
        </div>
    )
}
