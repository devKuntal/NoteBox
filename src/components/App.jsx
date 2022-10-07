import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import TypeArea from "./TypeArea";
import Note from "./Note";

function App() {
    const [notes, setNote] = useState([]);

    function addNote(newNote) {
        setNote((prevValue) => {
        return [...prevValue, newNote];
        });
    }
    function deleteNote(id) {
        setNote((prevValue) => {
        return prevValue.filter((noteItem, index) => {
            return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <TypeArea onAdd={addNote}/>
            {notes.map((noteItem, index) => {
                return (
                <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
                );
            })}
            <Footer />
        </div>
        
    );
}

export default App;