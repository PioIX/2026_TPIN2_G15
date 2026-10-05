"use client"

import { useState } from "react"

export default function Form({ title, buttonText, onButtonClick, register }) {

    const [username, setUsername] = useState("")
    const [mail, setMail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [foto, setFoto] = useState(null)

    const handleLogin = async () => {

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: mail,
                password: contrasena
            })
        })

        const data = await response.json()

        if (response.ok) {
            localStorage.setItem("usuario", JSON.stringify(data.usuario))

            window.location.href = "/chats"
        }
        else {
            console.log(data.mensaje)
        }
    }

    const handleClick = () => {

        if (register) {
            onButtonClick(username, mail, contrasena, foto)
        }
        else {
            handleLogin()
        }
    }

    return (
        <div>

            <h1>{title}</h1>

            {register && (
                <div>

                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="file"
                        onChange={(e) => setFoto(e.target.files[0])}
                    />

                </div>
            )}

            <input
                type="email"
                placeholder="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
            />

            <button onClick={handleClick}>
                {buttonText}
            </button>

        </div>
    )
}
