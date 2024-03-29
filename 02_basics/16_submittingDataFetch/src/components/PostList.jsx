import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/PostListStore'
import WelcomeMesssage from './WelcomeMesssage';
import LoadingSpinner from './LoadingSpinner';

function PostList() {

  const { postList,fetching } = useContext(PostListData);
 


  return (
    <>
    {fetching && <LoadingSpinner/>}
      { !fetching&& postList.length === 0 && <WelcomeMesssage />}
      { !fetching&& postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostList