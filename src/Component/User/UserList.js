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
    console.log("student", student.data._id)
    const user = student.data._id

    function userdelete(_id) {
        alert(_id, "id")
        const temp = {

            userId: _id,
            ownerId: user
        }
        console.log(temp, "temp")
        axios.put('/changeStatus?status=isDeleted', temp).then(
            res => {
                console.log(res)

            }).catch(
                err => {
                    console.log(err)
                }
            )
    }

    function userapproved(_id) {
         alert(_id, "id")
        const temp = {

            userId: _id,
            ownerId: user
        }
        console.log(temp, "temp")

        axios.put('/changeStatus?status=approved', temp).then(
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

    function userunapproved(_id) {
        // alert(_id, "id")
        const temp = {

            userId: _id,
            ownerId: user
        }
        console.log(temp, "temp")

        axios.put('/changeStatus?status=unapproved', temp).then(
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


                                    console.log("gdghdfgsgf", data)
                                    return (

                                        <tr>
                                            <td scope="row">{item.firstName}</td>
                                            <td scope="row">{item.lastName}</td>

                                            <td scope="row">{item.email}</td>
                                            <td scope="row">{item.phone}</td>
                                            <td scope="row">{item.roleId.roleName}


                                            </td>

                                            <td scope='row'>

                                                <img src={`hhttps://foodielandnod.herokuapp.com/${item.Image}`} alt="fftgh" style={{ width: "120px", height: "100px" }} />
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
                    <div>
                        <div onClick={nextPage}> Previous Page </div>
                        <div onClick={previousPage}> Next Page </div>
                    </div>
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


//         <div class="row pt-5 float-left pb-5">
{/* <div class="col-sm-6 bg-light pt-5 ">
<h1 class="pt-5 pb-5">{item.recipeId.title}</h1>
<p class="text-muted ml-5">{item.recipeId.description}<br /> Maxime mollitia,

</p>

<h6 class="text-muted font-weight-bold pb-5 pt-3 ml-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill ml-5 text-dark mr-3" viewBox="0 0 16 16">
    <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
  </svg>
  {item.recipeId.cookTime}

  <span class=" text-muted ml-5">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple text-dark mr-3" viewBox="0 0 16 16">
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
    </svg>
      {item.recipeId.categoryId.categoryName}
  </span>
</h6>

<div class="float-left ml-5 pt-5">
  <div class="row">
    <div class="col">
      <h6 class="text-dark font-weight-bold ml-5 ">
      <img src={`https://foodielandnod.herokuapp.com/${item.recipeId.image}`} clas="float-left" alt="fftgh" style={{ width: '50px', height: "50px" }} class="rounded-circle mr-3" />
       
      {item.recipeId.userId.firstName}
        <p class="text-muted pb-5 pt-2">12 November 2021</p>
      </h6>
    </div>
    <div class="col">
      <a href="/recepi" type="button" class="btn btn-dark btn-lg rounded-lg float-right ml-5">VIEW RECIPE</a>
    </div>
  </div>


</div>
</div>
<div class="col-sm-6 pt-5 ">
<img src={`https://foodielandnod.herokuapp.com/${item.recipeId.userId.Image}`}
class="rounded-lg" alt="description"
style={{ width: "660px", height: "500px" }}  />




</div>
</div> */}