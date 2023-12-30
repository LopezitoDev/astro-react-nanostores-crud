import { useStore } from "@nanostores/react"
import { contacts, isEditing, editingContact, editContact } from "../states/contacts"

import useField from "../hooks/useField"

function Modal() {
  const contactsInStore = useStore(contacts)
  const contactID = useStore(editingContact)

  const contactToEdit = contactsInStore.find(c => c.id == contactID)

  const nombreInput = useField("text", contactToEdit.nombre)
  const emailInput = useField("email", contactToEdit.email)
  const phoneInput = useField("number", contactToEdit.celular)

  const handleSubmit = e => {
    e.preventDefault()

    const contactoEditado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      celular: phoneInput.value
    }

    editContact(contactoEditado)
  }

  return (
    <div className="
      absolute inset-0 bg-black bg-opacity-40 grid place-content-center
    text-white">
      <form onSubmit={handleSubmit}
        className="p-4 rounded-lg text-white bg-slate-800 flex flex-col justify-center items-center">
        <label className="m-2">
          <p>Nombre:</p>
          <input {...nombreInput} className="text-black" />
        </label>
        <label className="m-2">
          <p>Email:</p>
          <input {...emailInput} className="text-black" />
        </label>
        <label className="m-2">
          <p>Celular:</p>
          <input {...phoneInput} className="text-black" />
        </label>
        <button type="submit"
          className="p-2 my-2 transition-all bg-orange-400 text-black font-bold rounded-full
            hover:bg-orange-500 active:scale-95"
          >
          Guardar Contacto!
        </button>
      </form>
    </div>
  )
}

export default function EditModal() {
  const edit = useStore(isEditing)
  
  if(!edit) return null

  return <Modal />
}