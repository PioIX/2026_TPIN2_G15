export default function ChatItem({ chat, onClick }) {

    return (
        <div onClick={onClick}>

            <img
                src={chat.foto || "/usuarioDefault.png"}
                alt="Foto"
                width="50"
                height="50"
            />

            <span>
                {chat.nombre}
            </span>

        </div>
    );
}