import { createContext, useReducer } from "react";


 export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});


const postListReducer = (currPostList, action) => {
    
    let newPostList=currPostList
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id!==action.payload.postId)
    }
    return newPostList;
}




const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST)
    const addPost = () => { };
    const deletePost = (postId) => { 
        // console.log(`delete post called for ${postId}`)

        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postId:postId,
            }
        })
    };









    return (
        <PostList.Provider value={{
            // postList: postList,
            // addPost: addPost,
            // deletePost: deletePost
            postList,
            addPost,
            deletePost
        }}>
            {children}

        </PostList.Provider >
    );

}
const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Mumbai',
        body: 'i friends i am going to mumbai for my vaccations',
        reactions: 15,
        userId: 'cmrohityadav',
        tags: ['vacation', 'mumbai', 'enjoy']

    },
    {
        id: '2',
        title: 'BE completed',
        body: 'EXTC ho gya apun ka ab masti krege',
        reactions: 50,
        userId: 'vinay',
        tags: ['BE','B.tech', 'Atharva', 'enjoy']

    },

]

export default PostListProvider;