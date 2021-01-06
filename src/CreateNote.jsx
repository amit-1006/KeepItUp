import React,{useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(prop)=>{

    const [note,setNote]=useState({
        title:"",
        content:""
    });
  
    const Store=(event)=>{
      if(event.target.name==="title")
         setNote({...note,title:event.target.value});
      else
         setNote({...note,content:event.target.value});   
    }
  const Add_note=()=>{
      prop.paste(note);
      setNote({
        title:"",
        content:""
      });
  }

    return (
        <>
      
        <form className="main_note">
          <input type="text" value={note.title} placeholder="Title" autoComplete="off" name="title" onChange={Store}/>
          <textarea rows='5' value={note.content} placeholder="Write a note..." name="content" onChange={Store}></textarea>
          <Fab className="addbtn" aria-label="add" onClick={Add_note}>
         <AddIcon />
         </Fab>
          </form>
        
        </>

    );
}
export default CreateNote;