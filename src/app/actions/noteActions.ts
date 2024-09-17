import { databases } from '@/utils/appwrite'
import { ID } from "appwrite"

export async function addNote(content: string): Promise<Note> {
  const newNote = {content: content}
  console.log(newNote)

  const response = await databases.createDocument(
    'notesApp',
    'notes',
    ID.unique(),
    newNote
  )

  const note: Note = {
    $id: response.$id,
    $createdAt: response.$createdAt,
    content: response.content,
  }
  
  return note 
}

export async function getNotes(): Promise<Note[]> {
  const response = await databases.listDocuments(
    'notesApp',
    'notes',
  )
  console.log(response.documents)

  const notes: Note[] = response.documents.map((doc) => ({
    $id: doc.$id,
    content: doc.content,
    $createdAt: doc.$createdAt,
  }))

  return notes
}

export async function deleteNote(noteId: string) {
  await databases.deleteDocument(
    'notesApp',
    'notes',
    noteId
  )
}