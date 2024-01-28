import React, { useContext, useEffect } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/PostListStore'
import WelcomeMesssage from './WelcomeMesssage';

function PostList() {

  const { postList, addIntialPosts } = useContext(PostListData);
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => { addIntialPosts(data.posts) });
  }, [])


  return (
    <>
      {postList.length === 0 && <WelcomeMesssage />}
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostList