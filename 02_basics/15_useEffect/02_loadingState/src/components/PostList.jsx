import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/PostListStore'
import WelcomeMesssage from './WelcomeMesssage';
import LoadingSpinner from './LoadingSpinner';

function PostList() {

  const { postList, addIntialPosts } = useContext(PostListData);
  const [fetching,setFetching]=useState(false);

  useEffect(() => {
    setFetching(true);
    console.log('fetching started');
    
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
         addIntialPosts(data.posts) ;
         setFetching(false);
         console.log('fetch return')
        });
        console.log('fetch ended')

        return ()=>{
          console.log("cleaning up useEffect")
        }
  }, [])


  return (
    <>
    {fetching && <LoadingSpinner/>}
      { !fetching&& postList.length === 0 && <WelcomeMesssage />}
      { !fetching&& postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostList