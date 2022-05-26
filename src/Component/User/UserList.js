import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { AllUser, EditUser, DelUser, } from '../../Config/Commonapi';

function UserList() {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [roleId, setRoleId] = useState("");
    const [_id, _setId] = useState(null);
    const [user_id, _setUserId] = useState(null);
    const [limit, setLimit] = useState(20);
    const [skip, setSkip] = useState(0);

    const nextPage = () => {
        setSkip(skip + limit)
    }

    const previousPage = () => {
        setSkip(skip - limit)
    }

    //    const fetchUsers = (limit, skip) => {
    //         // Make sure you send 'limit' and 'skip' as query parameters to your node.js server
    //         fetch(`/getAllUsers?limit=${limit}&skip=${skip}`) 
    //             .then((res) => {
    //                 this.setState({
    //                     users: res.data.data
    //                 })
    //             })
    //     }

    useEffect(() => {
        fetchData(limit, skip);
    }, []);

    async function fetchData() {

        await axios.get(`/getAllUsers?limit=${4}&skip=${0}`)
            .then((response) => { setData(response.data.data) })
        //.then((response) => { console.log(response.data) });

    }

    useEffect(() => {
        fetchData(limit, skip)
    }, [skip, limit])


    function selectUser(id) {
        let item = data[id - 1];
        setFirstName(item.firstName)
        setLastName(item.lastName)
        setEmail(item.email)
        setPhone(item.phone)
        setRoleId(item.roleId)
        _setId(item.id)

    }

    const student = JSON.parse(localStorage.getItem("userdata"))
   // console.log("student", student.data._id)
    const user = student.data._id

    function userdelete(_id) {
       // alert(_id, "id")
        const temp = {

            userId: _id,
            ownerId: user
        }
       // console.log(temp, "temp")
        axios.put('/changeStatus?status=isDeleted', temp).then(
            res => {
                console.log(res)
                alert("User Deleted SuccessFully ..");
            }).catch(
                err => {
                    console.log(err)
                }
            )
    }

    function userapproved(_id) {
        // alert(_id, "id")
        const temp = {

            userId: _id,
            ownerId: user
        }
     //   console.log(temp, "temp")

        axios.put('/changeStatus?status=approved', temp).then(
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

    function userunapproved(_id) {

        const temp = {

            userId: _id,
            ownerId: user
        }
      //  console.log(temp, "temp")

        axios.put('/changeStatus?status=unapproved', temp).then(
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




    return (

        <div>
            <div class="content px-5 py-5">

                <div className=' '>


                    <table class="table table-striped table-bordered h-100"  >
                        <thead>
                            <tr>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">RoleId</th>
                                <th scope="col">Image</th>
                                <th scope="col">USER UPDATE</th>
                                <th scope="col"> USER DELETE</th>
                                <th scope="col"> Status </th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                data.map(item => {


                                   // console.log("gdghdfgsgf", data)
                                    return (

                                        <tr>
                                            <td scope="row">{item.firstName}</td>
                                            <td scope="row">{item.lastName}</td>

                                            <td scope="row">{item.email}</td>
                                            <td scope="row">{item.phone}</td>
                                            <td scope="row">{item.roleId.roleName}


                                            </td>

                                            <td scope='row'>

                                                <img src={`http://95.111.202.157:8001/${item.Image}`} alt="fftgh" style={{ width: "120px", height: "100px" }} />
                                            </td>
                                            <td scope="row">

                                          
                                                <a href={`/userupdate/${item._id}`} onClick={() => selectUser(item.id)}>
                                                    <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Edit</button>


                                                </a>
                                            </td>

                                            <td scope="row">
                                                <a onClick={() => userdelete(item._id)}>

                                                    <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Delete</button>

                                                </a>
                                            </td>
                                            <td scope="row">

                                                <div class="container" >
                                                    <div class="dropdown">
                                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{item.status}
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown" onClick={() => userapproved(item._id)}>Approved</a></li>
                                                            <li><a class="dropdown" onClick={() => userunapproved(item._id)}>UnApproved</a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>

                                    )
                                })
                            }


                        </tbody>

                        {/* <tfoot>
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">RoleId</th>
                        <th scope="col">Image</th>
                        <th scope="col">USER UPDATE</th>
                        <th scope="col"> USER DELETE</th>
                        <th scope="col"> Status </th>
                    </tr>
                        </tfoot> */}
                    </table>
                    {/* <div>
                        <div onClick={nextPage}> Previous Page </div>
                        <div onClick={previousPage}> Next Page </div>
                    </div> */}
                    {/* <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={data.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(4)}
                    /> */}

                </div>

            </div>

         
        </div>

    )
}


export default UserList;


