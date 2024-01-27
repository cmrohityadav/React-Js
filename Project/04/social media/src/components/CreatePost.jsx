import React, { useContext, useRef } from 'react'
import { PostList } from '../store/PostListStore';

function CreatePost() {

  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const postBody = postBodyElement.current.value;
    const postTitle = postTitleElement.current.value;
    const userId = userIdElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ")

    addPost(userId,postTitle,postBody,reactions,tags)
    postBodyElement.current.value=""
    postTitleElement.current.value=""
  userIdElement.current.value=""
   reactionsElement.current.value=""
 tagsElement.current.value=""
  }

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter your userID here</label>
          <input type="text" className="form-control" id="userId" placeholder='your user id' aria-describedby="emailHelp" ref={userIdElement} />

        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" placeholder='How are you feeling today' aria-describedby="emailHelp" ref={postTitleElement} />

        </div>


        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea rows={4} type="text" className="form-control" id="body" placeholder='tell us more about it' aria-describedby="emailHelp" ref={postBodyElement} />

        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="number" className="form-control" id="reactions" placeholder='How many people recated to this post' aria-describedby="emailHelp" ref={reactionsElement} />

        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your tags</label>
          <input type="text" className="form-control" id="tags" placeholder='please enter tag using space' aria-describedby="emailHelp" ref={tagsElement} />

        </div>


        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </>
  )
}

export default CreatePost