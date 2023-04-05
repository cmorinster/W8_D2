import React from 'react'

export default function ToDoCard({ task, id }) {
  console.log(id)
  id = id + 1
  return (
    <div className='card'>
        <div className='card-body'>
            <p className='card-text'>{task}</p>
        </div>

      
    </div>
  )
}
