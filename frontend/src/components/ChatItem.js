import styles from "../app/chats/Chats.module.css"

export default function ChatItem({ chat, onClick }) {

    const esGrupo = chat.tipo_chat

    const nombre = esGrupo
        ? chat.nombre_grupo
        : chat.nombre_contacto

    const foto = esGrupo
        ? chat.foto
        : chat.foto_contacto

    return (
        <div className={styles["chat-item"]} onClick={onClick}>

            <img
                className={styles["chat-foto"]}
                src={foto || "/foto-default.jpg"}
                alt="Foto"
            />

            <div className={styles["chat-info"]}>
                <h3>{nombre}</h3>
                <p>{esGrupo ? "Grupo" : chat.mail_contacto}</p>
            </div>

        </div>
    )
}
