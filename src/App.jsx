import Header from "./components/Header/Header"
import NoteCard from "./components/NoteCard/NoteCard"

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="note-card-wrap">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </>
  )
}

export default App
