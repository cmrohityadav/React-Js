import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx'
import PostList, { postLoader } from './components/PostList.jsx'
import {createPostAction} from './components/CreatePost.jsx'
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App />
  // },
  // {
  //   path: '/createpost',
  //   element: <CreatePost />
  // },
  // {},

  {path:'/',
element:<App/>,
children:[
  {
    path: '/',
    element: <PostList/>,
    loader:postLoader
  },
  {
    path: '/createpost',
    element: <CreatePost />,
    action:createPostAction
  },
  {},
  
]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
