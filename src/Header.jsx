import React from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';

const Header=()=>{
    return (

        <>
        <div className="main_div">
        <div className="header">
        <EventNoteIcon className='icon'/>
          <h3>KeepItUp</h3>
        </div>
        </div>
        </>

    );
}
export default Header;