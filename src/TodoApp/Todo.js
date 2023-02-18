import React, { useState } from 'react';

export default function Todo(props) {

  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  

  const submit =(e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert("All the fields are mandatory !");
      }
      else{
        props.listhandler(title,desc);
        settitle("");
        setdesc("");
      }
    }
 
  return (
    <div> 
      <form onSubmit={submit}>
        <div className="form-group mb-3">
          <label htmlFor="todo_title">Todo Title</label>
          <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" placeholder="Place the TODO title here ....."/>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="todo_desc">Todo Description</label>
          <input type="text" value={desc}className="form-control"  onChange={(e)=>{setdesc(e.target.value)}} placeholder="Place the TODO Description here ....."/>
        </div>
        <button type="submit" className="btn btn-primary btn-sm my-2">Submit</button>
      </form>
    </div>
  )
}
