import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GetAllBlog, DeleteBlog } from '../../Config/Commonapi';

function BlogList() {

    const [data, setData] = useState([]);
    const [userId, setUserId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);
    const [video, setVideo] = useState([]);
    const [blogFAQ, setBlogFAQ] = useState("");
    const [blogFAQtitle, setBlogFAQTitle] = useState("");
    const [blogFAQdescription, setBlogFAQDescription] = useState("");
    const [blogFAQimage, setBlogFAQImage] = useState([]);
    const [_id, _setId] = useState(null);


    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {

        await axios.get('/getAllBlog')
            .then((response) => { setData(response.data) })
        //.then((response) => { console.log(response.data) });

    }

    function selectUser(id) {
        let item = data[id - 1];
        // setFirstName(item.firstName)
        // setLastName(item.lastName)
        // setEmail(item.email)
        // setPhone(item.phone)
        // setRoleId(item.roleId)
        // _setId(item.id)

    }

    const student = JSON.parse(localStorage.getItem("userdata"))
    console.log("student", student.data._id)
    const user = student.data._id

    function blogdelete(_id) {
        alert(_id, "id")
        const temp = {

            blogId: _id,
            ownerId: user
        }
        console.log(temp, "temp")
        axios.put('/statusChanged?status=isDeleted', temp).then(
            res => {
                console.log(res)

            }).catch(
                err => {
                    console.log(err)
                }
            )
    }

    function blogapproved(_id) {

        const temp = {

            blogId: _id,
            ownerId: user
        }
        console.log(temp, "temp")

        axios.put('/statusChanged?status=approved', temp).then(
            res => {
                console.log(res)
                alert("you are approved successfully......");

            }).catch(
                err => {
                    console.log(err)
                    alert("you are already approved");
                }
            )
    }

    function blogunapproved(_id) {

        const temp = {

            blogId: _id,
            ownerId: user
        }
        console.log(temp, "temp")

        axios.put('/statusChanged?status=unapproved', temp).then(
            res => {
                console.log(res)
                alert("you are unapproved successfully......");

            }).catch(
                err => {
                    console.log(err)
                    alert("you are already approved");
                }
            )
    }




    return (

        <div>
            <div class="content px-5 py-5">

                <div className=''>


                    <table class="table table-striped table-bordered h-100" >
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">SubTitle</th>
                                <th scope="col">Description</th>
                                <th scope="col">Image</th>
                                <th scope="col">BLOG UPDATE</th>
                                <th scope="col"> BLOG DELETE</th>
                                <th scope="col"> Status </th>
                                <th scope="col"> Blog Detail Page </th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                data.map((item, index) => {


                                    console.log("gdghdfgsgf", item._id)
                                    return (

                                        <tr key={index} value={item._id}>
                                            <td scope="row">{item.title}
                                                <br>
                                                    {/* {item._id} */}
                                                </br>
                                            </td>
                                            <td scope="row">{item.subTitle}
                                                {/* {item._id} */}
                                            </td>
                                            <td scope="row">{item.description}</td>


                                            <td scope='row'>

                                                <img src={`https://foodielandnod.herokuapp.com/${item.image}`} alt="fftgh" style={{ width: "150px", height: "150px" }} />
                                            </td>
                                            <td scope="row">


                                                <a href="/blogupdate" onClick={() => selectUser(item._id)}>
                                                    <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Edit</button>


                                                </a>
                                            </td>
                                            <td scope="row">
                                                <a onClick={() => blogdelete(item._id)}>

                                                    <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Delete</button>

                                                </a>
                                            </td>
                                            <td scope="row">

                                                <div class="container" >
                                                    <div class="dropdown">
                                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{item.status}
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown" onClick={() => blogapproved(item._id)}>Approved</a></li>
                                                            <li><a class="dropdown" onClick={() => blogunapproved(item._id)}>UnApproved</a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>


                                                <a href='blogdetailpage' onClick={() => selectUser(item._id)}>

                                                    <p>{item._id}</p>
                                                    <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">View Detail</button>


                                                </a>

                                                {/* <a href={`/blogdetailpage/${item._id}`} onClick={() => selectUser(item._id)}>

                                                    <p>{item._id}</p>
                                                    <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">View Detail</button>


                                                </a> */}
                                            </td>

                                        </tr>

                                    )
                                })
                            }


                        </tbody>

                    </table>


                </div>

            </div>


        </div>

    )
}


export default BlogList;