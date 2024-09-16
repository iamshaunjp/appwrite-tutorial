'use client'
import { useState} from 'react'

export default function NoteList({ initialNotes }: { initialNotes: Note[] }) {
  const [notes, setNotes] = useState<Note[]>(initialNotes)

  const handleDelete = async (noteId: string) => {
 
  }

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.$id} id={note.$id} onClick={() => handleDelete(note.$id)}>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  )
}
