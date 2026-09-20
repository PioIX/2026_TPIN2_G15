"use client";

import { useEffect, useState } from "react";
import ChatList from "@/components/ChatList";

export default function ChatsPage() {

    const [chats, setChats] = useState([]);

    useEffect(() => {

        fetch("http://localhost:4000/chats")
            .then(response => response.json())
            .then(data => {
                setChats(data);
            });

    }, []);

    function seleccionarChat(chat) {
        console.log(chat);
    }

    return (
        <div>

            <h1>Mis chats</h1>

            <ChatList
                chats={chats}
                seleccionarChat={seleccionarChat}
            />

        </div>
    );
}