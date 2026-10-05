import styles from "../app/chats/Chats.module.css"
import ChatItem from "./ChatItem"

export default function ChatList({ chats, onChatClick }) {

    return (
        <div className={styles["chat-list"]}>

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
