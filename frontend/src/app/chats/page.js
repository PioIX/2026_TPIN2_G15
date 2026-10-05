"use client"
import styles from "./Chats.module.css"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import ChatList from "@/components/ChatList"

const Popup = dynamic(() => import("reactjs-popup"), {
    ssr: false
})

export default function ChatsPage() {

    const [chats, setChats] = useState([])
    const [usuario, setUsuario] = useState(null)

    const [mail, setMail] = useState("")
    const [error, setError] = useState("")

    const [nombreGrupo, setNombreGrupo] = useState("")
    const [mails, setMails] = useState("")
    const [fotoGrupo, setFotoGrupo] = useState(null)

    useEffect(() => {

        const usuarioGuardado = localStorage.getItem("usuario")

        if (usuarioGuardado) {

            const usuarioActual = JSON.parse(usuarioGuardado)

            setUsuario(usuarioActual)

            cargarChats(usuarioActual.id_usuario)
        }

    }, [])

    const cargarChats = (id_usuario) => {

        fetch(`http://localhost:4000/chats/${id_usuario}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setChats(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const crearChat = async (close) => {

        setError("")

        const response = await fetch("http://localhost:4000/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_usuario: usuario.id_usuario,
                mail_contacto: mail
            })
        })

        const data = await response.json()

        if (response.ok) {

            setMail("")

            cargarChats(usuario.id_usuario)

            close()

        }
        else {

            setError(data.mensaje)

        }
    }

    const crearGrupo = async (close) => {

        setError("")

        const vectorMails = mails
            .split(",")
            .map(mail => mail.trim())
            .filter(mail => mail !== "")

        const response = await fetch("http://localhost:4000/grupos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_usuario: usuario.id_usuario,
                nombre_grupo: nombreGrupo,
                foto: fotoGrupo ? fotoGrupo.name : null,
                mails: vectorMails
            })
        })

        const data = await response.json()

        if (response.ok) {

            console.log(data)

            setNombreGrupo("")
            setMails("")
            setFotoGrupo(null)

            cargarChats(usuario.id_usuario)

            close()

        }
        else {

            setError(data.mensaje)

        }
    }

    const manejarChat = (chat) => {
        window.location.href = `/chat?id_chat=${chat.id_chat}`
    }

    return (
        <div className={styles["chats-container"]}>

            <div className={styles["chats-header"]}>

                <h1>Mis chats</h1>

                <div>
                    <Popup
                        trigger={
                            <button className={styles.boton}>
                                Nuevo chat
                            </button>
                        }
                        modal
                        nested
                    >
                        {close => (
                            <div>
                                <h2>Nuevo chat</h2>

                                <input
                                    type="email"
                                    placeholder="Mail del usuario"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                />

                                <button
                                    className={styles.boton}
                                    onClick={() => crearChat(close)}
                                >
                                    Crear chat
                                </button>

                                <button
                                    className={styles.boton}
                                    onClick={() => {
                                        setError("")
                                        setMail("")
                                        close()
                                    }}
                                >
                                    Cancelar
                                </button>

                                {error && <p>{error}</p>}
                            </div>
                        )}
                    </Popup>

                    <Popup
                        trigger={
                            <button className={styles.boton}>
                                Nuevo grupo
                            </button>
                        }
                        modal
                        nested
                    >
                        {close => (
                            <div>
                                <h2>Nuevo grupo</h2>

                                <input
                                    type="text"
                                    placeholder="Nombre del grupo"
                                    value={nombreGrupo}
                                    onChange={(e) => setNombreGrupo(e.target.value)}
                                />

                                <input
                                    type="text"
                                    placeholder="Mails separados por coma"
                                    value={mails}
                                    onChange={(e) => setMails(e.target.value)}
                                />

                                <input
                                    type="file"
                                    onChange={(e) => setFotoGrupo(e.target.files[0])}
                                />

                                <button
                                    className={styles.boton}
                                    onClick={() => crearGrupo(close)}
                                >
                                    Crear grupo
                                </button>

                                <button
                                    className={styles.boton}
                                    onClick={() => {
                                        setError("")
                                        setNombreGrupo("")
                                        setMails("")
                                        setFotoGrupo(null)
                                        close()
                                    }}
                                >
                                    Cancelar
                                </button>

                                {error && <p>{error}</p>}
                            </div>
                        )}
                    </Popup>
                </div>
            </div>

            <ChatList
                chats={chats}
                onChatClick={manejarChat}
            />

        </div>
    )

}
