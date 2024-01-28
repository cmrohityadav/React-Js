import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/PostListStore'
import WelcomeMesssage from './WelcomeMesssage';

function PostList() {

  const { postList,addIntialPosts } = useContext(PostListData);
  // console.log(postList)

  const handleGetPostsClick = () => {
    // console.log("onGetPostsClick")
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>{addIntialPosts(data.posts)});

  }
  return (
    <>
      {postList.length === 0 && <WelcomeMesssage onGetPostsClick={handleGetPostsClick} />}
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostList