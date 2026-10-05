import ChatItem from "./ChatItem"

export default function ChatList({ chats, onChatClick }) {

    return (
        <div>

            {chats.map((chat) => (
                <ChatItem
                    key={chat.id_chat}
                    chat={chat}
                    onClick={() => onChatClick(chat)}
                />
            ))}

        </div>
    )
}
