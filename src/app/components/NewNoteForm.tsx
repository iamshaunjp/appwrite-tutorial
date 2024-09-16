'use client'
import { useState } from 'react'
import { addNote } from '../actions/noteActions'

const NewNoteForm = () => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (content.trim() !== '') {
      await addNote(content)
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NewNoteForm