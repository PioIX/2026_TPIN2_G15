"use client"

import { useState } from "react"
import Form from "@/components/Form"
import styles from "./Login.module.css"

export default function LoginPage() {

    const [register, setRegister] = useState(false)

    const handleRegister = async (username, mail, contrasena, foto) => {

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                mail: mail,
                contrasena: contrasena,
                foto: foto ? foto.name : null
            })
        })

        const data = await response.json()

        console.log(data)
    }

    return (
        <div className={styles.contenedor}>

            <div className={styles.login}>

                {!register ? (

                    <>
                        <Form
                            title="Iniciar sesión"
                            buttonText="Iniciar sesión"
                            register={false}
                        />

                        <button
                            className={styles.cambiar}
                            onClick={() => setRegister(true)}
                        >
                            Quiero registrarme
                        </button>
                    </>

                ) : (

                    <>
                        <Form
                            title="Registrarse"
                            buttonText="Registrarse"
                            onButtonClick={handleRegister}
                            register={true}
                        />

                        <button
                            className={styles.cambiar}
                            onClick={() => setRegister(false)}
                        >
                            Quiero iniciar sesión
                        </button>
                    </>

                )}

            </div>

        </div>
    )
}
