import styles from "../app/chats/Chats.module.css"

export default function ChatItem({ chat, onClick }) {

    const esGrupo = chat.tipo_chat

    const nombre = esGrupo
        ? chat.nombre_grupo
        : chat.nombre_contacto

    const foto = esGrupo
        ? chat.foto || "/foto_default.jpg"
        : chat.foto_contacto || "/foto_default.jpg"

    return (
        <div className={styles["chat-item"]} onClick={onClick}>

            <img
                className={styles["chat-foto"]}
                src={foto}
                alt="Foto"
            />

            <div className={styles["chat-info"]}>
                <h3>{nombre}</h3>
                <p>{esGrupo ? "Grupo" : chat.mail_contacto}</p>
            </div>

        </div>
    )
}