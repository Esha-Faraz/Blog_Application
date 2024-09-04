import { BrowserRouter , Route , Routes } from "react-router-dom"


import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "../pages/Home"
import PostDetail from "../pages/PostDetail"
import Author from "../pages/Author"
import CategoryPost from "../pages/CategoryPost"
import CreatePost from "../pages/CreatePost"
import Dashboard from "../pages/Dashboard"
import DeletePost from "../pages/DeletePost"
import EditPost from "../pages/EditPost"
import Login from "../pages/Login"
import Register from "../pages/Register"
import UserProfile from "../pages/UserProfile"
import Logout from "../pages/Logout"
import ErrorPage from "../pages/ErrorPage"
import AuthorPost from "../pages/AuthorPost"
const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/posts/categories/:category" element={<CategoryPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/myposts/:id" element={<Dashboard />} />
        <Route path="/post/:id/delete" element={<DeletePost />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/post/user/:id" element={<AuthorPost />} />
        <Route path="*" element={<ErrorPage />} />


    </Routes>
    <Footer />
    </BrowserRouter>
      

    </>
  )
}

export default Router;