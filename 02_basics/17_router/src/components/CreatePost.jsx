import React, { useContext, useRef } from 'react'
import { PostList } from '../store/PostListStore';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

  const { addPost } = useContext(PostList)
  const navigate=useNavigate();
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

    postBodyElement.current.value = ""
    postTitleElement.current.value = ""
    userIdElement.current.value = ""
    reactionsElement.current.value = ""
    tagsElement.current.value = ""

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags
        
      })
    })
      .then(res => res.json())
      .then((resOb)=>{
        console.log(resOb)
      addPost(resOb);
      navigate('/')
    });
        // navigate('/')
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