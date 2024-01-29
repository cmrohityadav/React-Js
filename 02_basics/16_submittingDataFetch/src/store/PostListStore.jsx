import { createContext, useEffect, useReducer, useState } from "react";


 export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    fetching:false,
    // addIntialPosts:()=>{},
});


const postListReducer = (currPostList, action) => {
    
    let newPostList=currPostList
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id!==action.payload.postId)
    }else if(action.type==='ADD_POST'){
            newPostList=[action.payload,...currPostList]
    }else if(action.type==='ADD_INITIAL_POSTS'){
        newPostList=action.payload.posts
    }
    return newPostList;
}





const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer,[])
    const [fetching,setFetching]=useState(false);

   
    const addPost = (post) => { 

        // console.log(`${userId} , ${postTitle},${postBody},${reactions},${tags}`)

        dispatchPostList({
            type:'ADD_POST',
            payload:post
        })
    };
    const deletePost = (postId) => { 
        // console.log(`delete post called for ${postId}`)

        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postId:postId,
            }
        })
    };
    const addIntialPosts = (posts) => { 

        // console.log(`${userId} , ${postTitle},${postBody},${reactions},${tags}`)

        dispatchPostList({
            type:'ADD_INITIAL_POSTS',
            payload:{
                posts:posts

            }
        })
    };


    useEffect(() => {
        setFetching(true);
        console.log('fetching started');
        const controller=new AbortController();
        const signal=controller.signal;
        fetch('https://dummyjson.com/posts',{signal})
          .then(res => res.json())
          .then((data) => {
             addIntialPosts(data.posts) ;
             setFetching(false);
             console.log('fetch return')
            });
            console.log('fetch ended')
    
            return ()=>{
              console.log("cleaning up useEffect");
              controller.abort();
            }
      }, [])






    return (
        <PostList.Provider value={{
            // postList: postList,
            // addPost: addPost,
            // deletePost: deletePost
            postList,
            addPost,
            deletePost,
            fetching,
      
        }}>
            {children}

        </PostList.Provider >
    );

}




export default PostListProvider;