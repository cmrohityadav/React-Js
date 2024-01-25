import React from 'react'

function CreatePost() {
  return (
    <>
      <form className="create-post">

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter your userID here</label>
          <input type="text" className="form-control" id="userId" placeholder='your user id' aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" placeholder='How are you feeling today' aria-describedby="emailHelp" />

        </div>


        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea rows={4} type="text" className="form-control" id="body" placeholder='tell us more about it' aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="number" className="form-control" id="reactions" placeholder='How many people recated to this post' aria-describedby="emailHelp" />

        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your tags</label>
          <input type="text" className="form-control" id="tags" placeholder='please enter tag using space' aria-describedby="emailHelp" />

        </div>


        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </>
  )
}

export default CreatePost