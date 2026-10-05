"use client"

import { useEffect, useState } from "react"
import ChatList from "@/components/ChatList"

export default function ChatsPage() {

    const [chats, setChats] = useState([])

    useEffect(() => {

        const usuarioGuardado = localStorage.getItem("usuario")

        if (!usuarioGuardado) {
            return
        }

        const usuario = JSON.parse(usuarioGuardado)

        fetch(`http://localhost:4000/chats/${usuario.id_usuario}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setChats(data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    const manejarChat = (chat) => {
        console.log("Chat seleccionado:", chat)
    }

    return (
        <div>

            <h1>Mis chats</h1>

            <ChatList
                chats={chats}
                onChatClick={manejarChat}
            />

        </div>
    )
}
