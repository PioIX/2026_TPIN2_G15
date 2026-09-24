"use client"

import { useState } from "react"

export default function Form({ title, buttonText, onButtonClick, register }) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState(null)

    const handleClick = () => {
        if (register) {
            onButtonClick(username, email, password, photo) 
        } 
        else { 
            onButtonClick(email, password) 
        }
    }

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

            {register && (
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />

                    <input
                        type="text"
                        placeholder="Username"
                        valu e={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
            )}

            <button onClick={() => onButtonClick(username, email, password, photo)}>
                {buttonText}
            </button>
        </div>)
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