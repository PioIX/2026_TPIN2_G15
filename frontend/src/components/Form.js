"use client"

import { useState } from "react"

export default function Form({ title, buttonText, onButtonClick, register }) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("ctrotta@pioix.edu.ar")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState(null)

    const handleLogin =  async (email, password) => {
        console.log({ email: email, password: password })
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })

        const data = await response.json()

        console.log(data)
    }

    const handleClick = () => {
        if (register) {
            onButtonClick(username, email, password, photo)
        }
        else {
            handleLogin(email, password)
        }
    }

    return(
        <div>

            <h1>{title}</h1>

            {register && (
                <div>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <input type="file" onChange={(e) => setPhoto(e.target.files[0])}></input>
                </div>
            )}

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}





/*"use client"
import { useState } from "react"

export default function Form({ title, buttonText, onButtonClick }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    return (
        <div>
            <h1>{title}</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={() => onButtonClick(email, password)}>
                {buttonText}
            </button>
        </div>
    )
}
const [username, setUsername] = useState("")
const [foto, setFoto] = useState()*/