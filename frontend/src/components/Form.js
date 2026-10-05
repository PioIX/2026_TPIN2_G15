"use client"

import { useState } from "react"

export default function Form({ title, buttonText, onButtonClick, register }) {

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [foto, setFoto] = useState(null)
    const [num_telefono, setNum_telefono] = useState("")

    const handleLogin =  async (mail, contrasena) => {
        console.log({ mail: mail, contrasena: contrasena })
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: mail, password: contrasena })
        })

        const data = await response.json()

        console.log(data)
    }

    const handleClick = () => {
        if (register) {
            onButtonClick(nombre, mail, contrasena, foto, num_telefono)
        }
        else {
            handleLogin(mail, contrasena)
        }
    }

    return(
        <div>

            <h1>{title}</h1>

            {register && (
                <div>
                    <input type="text" placeholder="Usuario" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <input type="file" onChange={(e) => setFoto(e.target.files[0])}></input>
                    <input type="text" placeholder="Número de teléfono" value={num_telefono} onChange={(e) => setNum_telefono(e.target.value)}></input>
                </div>
            )}

            <input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)}></input>
            <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)}></input>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}




