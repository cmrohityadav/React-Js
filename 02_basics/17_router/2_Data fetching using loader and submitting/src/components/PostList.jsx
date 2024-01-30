import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/PostListStore'
import WelcomeMesssage from './WelcomeMesssage';
import LoadingSpinner from './LoadingSpinner';
import { useLoaderData } from 'react-router-dom';

function PostList() {

const postList=useLoaderData() 


  return (
    <>
    
      { postList.length === 0 && <WelcomeMesssage />}
      { postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  )
}



 export  const  postLoader=()=>{
    return fetch('https://dummyjson.com/posts',)
  .then(res => res.json())
  .then((data) => {
    // console.log(data.posts) ;
    return data.posts
     
    });
}
export default PostList
