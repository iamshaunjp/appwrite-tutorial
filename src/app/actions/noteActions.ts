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