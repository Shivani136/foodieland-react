import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Component/Admin/Dashboard';
import Registration from '../Component/User/Registration';
import Login from '../Component/User/Login';
import UserList from '../Component/User/UserList';
import UserUpdate from '../Component/User/UserUpdate';
import ForgetPassword from '../Component/User/ForgetPassword';
import ResetPassword from '../Component/User/ResetPassword';
import SiteManagement from '../Component/User/SiteManagement';
import CategoryList from '../Component/Category/CategoryList';
import CategoryUpdate from '../Component/Category/CategoryUpdate';
import AddCategory from '../Component/Category/AddCategory';
import RecepiDetailPage from '../Component/Recepi/RecepiDetailPage';
import RecepiList from '../Component/Recepi/RecepiList';
import AddRecepi from '../Component/Recepi/AddRecepi';
import RecepiUpdate from '../Component/Recepi/RecepiUpdate';
import RecepiMetaAdd from '../Component/Recepi/RecepiMetaAdd';
import BlogDetailPage from '../Component/Blog/BlogDetailPage';
import UpdateBlog from '../Component/Blog/UpdateBlog';
import BlogListArticlePage from '../Component/Blog/BlogListArticlePage';
import RecepiListArticle from '../Component/Recepi/RecepiListArticle';
import Table from '../Component/User/Table';
// import BlogPostPage from '../Component/Blog/BlogPostPage';
import AddBlog from '../Component/Blog/AddBlog';
import BlogList from '../Component/Blog/BlogList';
import UserListTemp from '../Component/User/UserListTemp'
// import Temp from '../Component/User/Temp';
import Contact from '../Component/Contact';
import About from '../Component/About';
import Home from '../Component/Home';

function Routing() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Registration />} />
        <Route path="/login" index element={<Login />} />

        <Route path="/userlist" element={<UserList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userupdate/:id" element={<UserUpdate />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/sitemanagement" element={<SiteManagement />} />
        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/categoryupdate" element={<CategoryUpdate />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/recepi" element={<RecepiDetailPage />} />
        <Route path="/recepilist" element={<RecepiList />} />
        <Route path="/addrecepi" element={<AddRecepi />} />
        <Route path="/recepiupdate" element={<RecepiUpdate />} />
        <Route path="/recepimeta" element={<RecepiMetaAdd />} />
        <Route path="/blogdetailpage" element={<BlogDetailPage />} />
        <Route path="/blogarticle" element={<BlogListArticlePage />} />
        <Route path="/tempuserlist" element={<UserListTemp />} />
        <Route path="/recepiarticle" element={<RecepiListArticle />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogupdate" element={<UpdateBlog />} />
        {/* <Route path="/temp" element={<Temp />} /> */}
        <Route path="/blogarticle" element={<BlogListArticlePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table" element={<Table />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="*" element={<NoPage />} />  */}

      </Routes>
    </BrowserRouter>
  )
}
export default Routing;