'use client'
import { useState } from 'react'

const NewNoteForm = () => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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