import React from 'react'

export default function ToDoForm(handleSubmit) {
  console.log(handleSubmit)
  return (
    <div>
        <form id="toDoForm" onSubmit={handleSubmit}>

            <div className="form-group">
            <input
                type="text"
                name="task"
                className="form-control"
                placeholder="Enter something to do"
            />
            <input
                type="submit"
                defaultValue="Submit"
                className="btn btn-dark w-100 mt-3"
            />
             </div>
        </form>
    </div>
  )
}
