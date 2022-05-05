import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Assest/Dashboard.css';
import { Register ,api} from '../../Config/Commonapi';

function Dashboard() {

  const student = JSON.parse(localStorage.getItem("userdata"))
  console.log("student", student.data.firstName)
  const user = student.data.firstName

 

console.log(api, "api")
return (
    <div>
        <div class="d-flex" id="wrapper">

        <div class="border-end bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading border-bottom bg-light">Foodien Land</div>
          <div class="list-group list-group-flush">

           <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/addblog">Add Blog</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/bloglist">Blog List</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/">User Create</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/userlist">UserList</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/tempuserlist">UserListTemp</a>  
            {/* <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/userlist">UserList</a> */}
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/addcategory">Add Category</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/categorylist">Category List</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/recepi">Recepi</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/addrecepi">Add Recepi</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/recepilist">Recepi List</a>

            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/recepimeta">Add RecepiMeta</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/sitemanagement">Site Management</a>


          </div>
        </div>

        <div id="page-content-wrapper">

          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container-fluid">

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li class="nav-item active"><a class="nav-link" href="#!">{user}</a></li>
                  <li class="nav-item"><a class="nav-link" href="/">LOGOUT</a></li>


                  {/* <div class="dropdown ml-3">
                    <button class="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown">Login with
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown" >Admin</a></li>
                      <li><a class="dropdown">User</a></li>

                    </ul>
                  </div> */}
                      </ul>
              </div>
            </div>
          </nav>
          {/* <!-- Page content--> */}
          <div class="container-fluid">
            <h1 class="mt-4">Simple Sidebar</h1>

          </div>
        </div>
      </div>

    </div>
  )
}
export default Dashboard;
