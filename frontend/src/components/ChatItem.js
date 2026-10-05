export default function ChatItem({ chat, onClick }) {

    const esGrupo = chat.tipo_chat

    const nombre = esGrupo
        ? chat.nombre_grupo
        : chat.nombre_contacto

    const foto = esGrupo
        ? chat.foto
        : chat.foto_contacto

    return (
        <div onClick={onClick}>

            <img
                src={foto || "/foto-default.jpg"}
                alt="Foto"
                width="50"
                height="50"
            />

            <span>
                {nombre}
            </span>

        </div>
    )
}
