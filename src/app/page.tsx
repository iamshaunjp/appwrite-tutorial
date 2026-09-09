import NewNoteForm from "./components/NewNoteForm";
import NoteList from "./components/NoteList";

export default async function Home() {
  const notes: Note[] = [];

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
