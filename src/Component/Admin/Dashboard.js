import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Assest/Dashboard.css';
import { Register, api } from '../../Config/Commonapi';
import UserList from '../User/UserList';

function Dashboard() {

  const student = JSON.parse(localStorage.getItem("userdata"))
  // console.log("student", student.data.firstName)
  const user = student.data.firstName



  // console.log(api, "api")
  return (
    <div>
      <div class="d-flex" id="wrapper">

        <div class="border-end bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading border-bottom bg-light font-weight-bolder text-uppercase font-italic">Foodien Land</div>
          <div class="list-group list-group-flush pt-5">
            <a class="list-group-item list-group-item-action list-group-item-light font-weight-bold   text-uppercase p-3" href="/addblog">Add Blog</a>
            <a class="list-group-item list-group-item-action list-group-item-light font-weight-bold text-uppercase p-3" href="/">Add User</a>
            <a class="list-group-item list-group-item-action list-group-item-light font-weight-bold   text-uppercase p-3" href="/userlist">UserList</a>
            <a class="list-group-item list-group-item-action list-group-item-light  font-weight-bold   text-uppercase p-3" href="/addcategory">Add Category</a>
            <a class="list-group-item list-group-item-action list-group-item-light  font-weight-bold   text-uppercase p-3" href="/addrecepi">Add Recepi</a>
            <a class="list-group-item list-group-item-action list-group-item-light font-weight-bold   text-uppercase p-3" href="/recepimeta">Add Recepi Meta</a>
            <a class="list-group-item list-group-item-action list-group-item-light font-weight-bold   text-uppercase p-3" href="/sitemanagement">Site Management</a>
          </div>
        </div>

        <div id="page-content-wrapper">

          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container-fluid">

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li class="nav-item active"><a class="nav-link" href="#!">{user}</a></li>
                  <li class="nav-item font-weight-bolder text-uppercase"><a class="nav-link" href="/">LOGOUT</a></li>


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
            <h1 class="mt-0 px-0 py-0  " style={{ fontSize: "13px", paddingRight: "150px" }}>
              <UserList />
            </h1>

          </div>
        </div>
      </div>

    </div>
  )
}
export default Dashboard;
