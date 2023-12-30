import { useStore } from "@nanostores/react"
import { contacts } from "../states/contacts"

import Contact from "./Contact"

export default function ContactList() {
  const contactsInStore = useStore(contacts)

  if(contactsInStore.length <= 0) {
    return <p className="text-white py-32">No hay contactos creados, crea uno</p>
  }

  return (
    <section className="grid grid-cols-3 text-white"> 
        {contactsInStore.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
    </section>
  )
}