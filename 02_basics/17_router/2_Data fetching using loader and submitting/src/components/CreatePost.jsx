import React, { useContext, useRef } from 'react'
import { PostList } from '../store/PostListStore';
import { useNavigate,Form, redirect } from 'react-router-dom';

function CreatePost() {

 
  

  return (
    <>
      <Form method="post" className="create-post" >

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter your userID here</label>
          <input type="text" className="form-control" id="userId" placeholder='your user id' aria-describedby="emailHelp" 
          name="userId"
           />

        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" placeholder='How are you feeling today' aria-describedby="emailHelp" 
          name="title" />

        </div>


        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea rows={4} type="text" className="form-control" id="body" placeholder='tell us more about it' aria-describedby="emailHelp"
            name='body'
          />
          

        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="number" className="form-control" id="reactions" placeholder='How many people recated to this post' aria-describedby="emailHelp" name='reactions' />

        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your tags</label>
          <input type="text" className="form-control" id="tags" placeholder='please enter tag using space' aria-describedby="emailHelp" name='tags' />

        </div>


        <button type="submit" className="btn btn-primary">Post</button>
      </Form>
    </>
  )
}

export default CreatePost;
export const createPostAction=async(data)=>{
 const formData=await  data.request.formData();
 const postData=Object.fromEntries(formData)
 postData.tags=postData.tags.split(" ")
 console.log(postData)
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then((resOb)=>{
      console.log(resOb)
  
    
  });
 return redirect('/')

}