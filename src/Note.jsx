import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Note=(prop)=>{

  const delItem=()=>{
     prop.del(prop.id);
  }

   return (
        <div className="note">
        <Fab className="delbtn" onClick={delItem}>
        <DeleteOutlineIcon />
      </Fab>
        
        <h2>{prop.title}</h2>
       
        <p className="content">{prop.content}</p>
       
        </div>   
   );
}

export default Note;