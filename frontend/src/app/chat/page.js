"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import styles from "./Chat.module.css"

export default function ChatPage() {

    const searchParams = useSearchParams()

    const id_chat = searchParams.get("id_chat")

    const [mensajes, setMensajes] = useState([])
    const [usuario, setUsuario] = useState(null)
    const [nombreChat, setNombreChat] = useState("Chat")

    useEffect(() => {

        const usuarioGuardado = localStorage.getItem("usuario")

        if (usuarioGuardado) {

            const usuarioActual = JSON.parse(usuarioGuardado)

            setUsuario(usuarioActual)

            fetch(`http://localhost:4000/chats/${usuarioActual.id_usuario}`)
                .then(response => response.json())
                .then(data => {

                    const chat = data.find(
                        chat => chat.id_chat == id_chat
                    )

                    if (chat) {

                        if (chat.tipo_chat) {
                            setNombreChat(chat.nombre_grupo)
                        }
                        else {
                            setNombreChat(chat.nombre_contacto)
                        }

                    }

                })
                .catch(error => {
                    console.log(error)
                })
        }

    }, [id_chat])

    useEffect(() => {

        if (!id_chat) {
            return
        }

        fetch(`http://localhost:4000/mensajes/${id_chat}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMensajes(data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [id_chat])

    return (
        <div className={styles.contenedor}>

            <div className={styles.header}>
                <h1>{nombreChat}</h1>
            </div>

            <div className={styles.mensajes}>

                {mensajes.map((mensaje) => {

                    const esPropio =
                        usuario &&
                        mensaje.id_usuario === usuario.id_usuario

                    return (
                        <div
                            key={mensaje.id_mensaje}
                            className={
                                esPropio
                                    ? `${styles.mensaje} ${styles.mensajePropio}`
                                    : styles.mensaje
                            }
                        >

                            <span className={styles.usuario}>
                                {mensaje.nombre}
                            </span>

                            <p className={styles.contenido}>
                                {mensaje.contenido}
                            </p>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}
