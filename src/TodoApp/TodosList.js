import React from 'react'

export default function TodosList(props) {

  // const DT={
  //     DateTime:new Date().toLocaleString(),
  // }
 
  const rendertodolist = props.todos_list.map((list,index) => {
    return (
      <div className="my-3" key={index} >
          <h5 className="card-title">{list.title}</h5>
          <p className="card-text">{list.desc}</p>
          {/* <button type="button" className="btn btn-sm btn-outline-danger"><i className="bi bi-trash3-fill" ></i> Delete</button>  */}
          {/* onClick={()=>props.deleteList(index)} */}
          {/* {DT.DateTime} */}
          <hr/>
      </div>
    )
  })
  return (
    <>
       <h2>What's your plan for today ?</h2>
       {rendertodolist}
    </>
 
  )
}
