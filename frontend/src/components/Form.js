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

            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => onButtonClick(email, password)}>
                {buttonText}
            </button>
        </div>
    )
}