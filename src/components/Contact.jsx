import { removeContact, openModal } from "../states/contacts"
import { FaTrash, FaPencil } from "react-icons/fa6"

export default function Contact({ id, nombre, email, celular }) {
  return (
    <article className="group transition-all cursor-pointer p-3 mx-6 my-3 rounded-md w-72 bg-slate-900 relative
        hover:shadow-[0_0_40px] hover:shadow-gray-600">
      <h1 className="font-bold text-2xl">{nombre}</h1>
      <p>{email}</p>
      <p>{celular}</p>

      <button className="transition-all opacity-0 absolute top-0 right-0 m-2 p-2
        bg-red-600 rounded-full font-bold
        hover:bg-red-700 group-hover:opacity-100" onClick={() => removeContact(id)}
        >
          <FaTrash />
        </button>

      <button className="transition-all opacity-0 absolute top-10 right-0 m-2 p-2 bg-yellow-600 rounded-full
        hover:bg-yellow-700 group-hover:opacity-100" 
        onClick={() => openModal(id)}>
        <FaPencil />
      </button>
    </article>
  )
}