import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Post from './components/Post.jsx'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import EditPost from './components/EditPost.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/'  element={<Layout/>}>
   <Route path='' element={<Home/>} />
   <Route path='home' element={<Home/>} />
   <Route path='post' element={<Post/>} />
   <Route path='editPost' element={<EditPost/>} />



   </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />

  </Provider>
  </React.StrictMode>
)
