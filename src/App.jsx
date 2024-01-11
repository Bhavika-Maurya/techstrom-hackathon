import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React from 'react'
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin"
import AdminDashboard from "./pages/admin/adminDashboard/AdminDashboard";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import MyState from './context/data/myState';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <MyState>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/allBlogs' element={<AllBlogs/>}/>
        <Route path='/blogInfo/:id' element={<BlogInfo/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>

        <Route path='/adminDashboard' element={<ProtectedRouteForAdmin>
          <AdminDashboard/>
        </ProtectedRouteForAdmin>
        }/>

        <Route path='/Createblog' element={
          <ProtectedRouteForAdmin>
                <CreateBlog/>
          </ProtectedRouteForAdmin>
        }/>
      </Routes>
      <Toaster/>
     </Router>
    </MyState>
  )
}

export default App

export const ProtectedRouteForAdmin=({children})=>{
  const admin = JSON.parse(localStorage.getItem('admin'))
  if(admin?.user?.email === "test@gmail.com"){
    return children
  }
  else{
    return <Navigate to = {'/AdminLogin'}/>
  }
}