import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { GetAllBlog, DeleteBlog } from '../../Config/Commonapi';
import Pagination from '../Paginations';
import '../../../src/style.scss';

function BlogList() {

    const [data, setData] = useState([]);
    const [_id, _setId] = useState(null);

    let PageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {

        await axios.get('/getAllBlog')
            .then((response) => { setData(response.data) })
        //.then((response) => { console.log(response.data) });

    }

  const student = JSON.parse(localStorage.getItem("userdata"))
    // console.log("student", student.data._id)
    const user = student.data._id

    function blogdelete(_id) {

        const temp = {

            blogId: _id,
            ownerId: user
        }
        console.log(temp, "temp")
        axios.put('/statusChanged?status=isDeleted', temp).then(
            res => {
                console.log(res)
                alert("Blog Deleted SuccessFully ..");

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
        // console.log(temp, "temp")

        axios.put('/statusChanged?status=approved', temp).then(
            res => {
                console.log(res)
                fetchData();

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

        axios.put('/statusChanged?status=unapproved', temp).then(
            res => {
                console.log(res)
                fetchData();

            }).catch(
                err => {
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

                        {currentTableData.map((item ,index) => {
                              
                            // { data.map((item, index) => {


                                    // console.log("gdghdfgsgf", item._id)
                                    return (

                                        <tr key={index} value={item._id}>
                                            <td scope="row">{item.title}

                                            </td>
                                            <td scope="row">{item.subTitle}

                                            </td>
                                            <td scope="row">{item.description}</td>


                                            <td scope='row'>

                                                <img src={`http://95.111.202.157:8001/${item.image}`} alt="fftgh" style={{ width: "120px", height: "120px" }} />
                                            </td>
                                            <td scope="row">


                                                <a href={`/blogupdate/${item._id}`} >
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


                                                <a href={`/blogdetailpage/${item._id}`} >

                                                    <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">View Detail</button>


                                                </a>


                                            </td>

                                        </tr>

                                    );
                                })
                            }


                        </tbody>

                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={data.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />


                </div>

            </div>


        </div>

    )
}


export default BlogList;