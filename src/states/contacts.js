import { atom } from "nanostores"
import generateUniqueId from "generate-unique-id"

export const contacts = atom([])

export const editingContact = atom("")
export const isEditing = atom(false)

export function addContact(contact) {
  contacts.set([
    ...contacts.get(),
    {
      id: generateUniqueId(),
      ...contact,
      editing: false
    }
  ])
}

export function removeContact(id) {
  const listWithContactRemoved = 
    contacts.get()
      .filter(c => c.id != id)

  contacts.set(listWithContactRemoved) 
}

export function openModal(id) { 
  editingContact.set(id)
  isEditing.set(true)
}

export function closeModal() {
  editingContact.set("")
  isEditing.set(false)
}

export function editContact(contactEdited) {
  const listWithContactModified = 
    contacts.get()
      .map(c => {
        if(c.id == editingContact.get()) {
          c.nombre = contactEdited.nombre
          c.email = contactEdited.email
          c.celular = contactEdited.celular

          return c
        }
        
        return c
      })

  contacts.set([...listWithContactModified])
  closeModal()
}