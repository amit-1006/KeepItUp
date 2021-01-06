import React,{useState} from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App=()=>{

const [data,setData]=useState([]);

 const addNote=(value)=>{
     if(value.content.length===0 && value.title.length===0){
         alert("Empty note cannot be created");
         return data;
     }
    
       setData((pre)=>{
           return [...pre,value];
       })

 }

 const Delete=(id)=>{
     setData(data.filter((val,ind)=>{
          return (ind!==id);
      }));
 }

    return (
        <>
       <div className="page"> 
       <Header/>
       <div className="container">
       <div className="row">
       <CreateNote paste={addNote}/>
       </div>
       </div>
      
      <br/>
      <br/>
      <div className="container">
       <div className="row">
       { data.map((val,index)=>{
          return <Note  title={val.title} content={val.content} key={index} id={index} del={Delete}/>
        })}
        </div>
        </div>
      
       </div>
        </>

    );
}
export default App;