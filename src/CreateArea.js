import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="form">
        <input
          className="title"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <p>
          <textarea
            className="content"
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note ..."
            rows="3"
          />
        </p>

        <button className="add" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
