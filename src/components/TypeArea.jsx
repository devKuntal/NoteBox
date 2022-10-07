import React from "react";
import { useState } from "react";

function TypeArea(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    });
    function handleChange() {
        // eslint-disable-next-line no-restricted-globals
        const {name, value} = event.target;
        setNote((prevValue) => {
            return {...prevValue,[name]: value};
        })
    }
    function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content:""
        });
    }
    return (
        <div>
            <form action="">
                <input 
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title" 
                />
                <textarea 
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default TypeArea;