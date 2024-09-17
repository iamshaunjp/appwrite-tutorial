import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import { getNotes } from './actions/noteActions'
import '../styles/globals.css'

export default async function Home() {
  const notes: Note[] = await getNotes()

  return (
    <div>
      <header>
        <h1>Note Ninja</h1>
      </header>

      <NoteList initialNotes={notes} />
      <NewNoteForm />
    </div>
  );
}
