import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
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

  
  let [rows, setRows] = useState ("1")
  let [paraClicked, setParaClicked] = useState (false)
  
  function Expand () {
    setParaClicked (!paraClicked)
    setRows ("3")
  }  
 

  return (
    <div>
      <form className="create-note">
        { paraClicked && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          onClick={Expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {rows}
        />
        {/* // It could be either of the two next ones!
        { paraClicked && <Zoom in={paraClicked}>   */}
        <Zoom in={paraClicked}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
        {/* } */}
      </form>
    </div>
  );
}

export default CreateArea;
