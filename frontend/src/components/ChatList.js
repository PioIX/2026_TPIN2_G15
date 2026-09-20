import ChatItem from "./ChatItem";

export default function ChatList({ chats, seleccionarChat }) {

    return (
        <div>

            {chats.map((chat) => (
                <ChatItem
                    key={chat.id_chat}
                    chat={chat}
                    onClick={() => seleccionarChat(chat)}
                />
            ))}

        </div>
    );
}