import React from 'react'

function WelcomeMesssage({onGetPostsClick}) {
  return (
    <>
<center> <h1 className='mt-5'>There are no posts</h1>
<button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts from server</button>
</center>
       
    </>
  )
}

export default WelcomeMesssage