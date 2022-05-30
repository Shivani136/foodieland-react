import React, { useState, useEffect,useMemo } from 'react'
import axios from 'axios'
import { GetAllRecipe, DeleteRecipe } from '../../Config/Commonapi';
import Pagination from '../Paginations';
import '../../../src/style.scss';

function RecepiList() {
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);
    const [video, setVideo] = useState([]);
    const [cookTime, setCookTime] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [_id, _setId] = useState(null);


    let PageSize = 3;
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

        await axios.get('/v1/getallrecipes')
            .then((response) => { setData(response.data) })
        //.then((response) => { console.log(response.data) });

    }

    function selectUser(_id) {
        // let recipeId;
        let item = data[_id - 1];
        setTitle(item.recipeId.title)
        setDescription(item.recipeId.description)
        setCookTime(item.recipeId.cookTime)
        setPrepTime(item.recipeId.prepTime)
        setCategoryId(item.recipeId.categoryId)
        setImage(item.recipeId.image)

        _setId(item._id)
    }

   // console.log("gdghdfgsgf", data)
    const student = JSON.parse(localStorage.getItem("userdata"))
   // console.log("student", student.data._id)
    const user = student.data._id

    function recepidelete(_id) {
       // alert(_id, "id")
        const temp = {

            recipeId: _id,
            ownerId: user
        }
        console.log(temp, "temp")
        axios.put('/recipesChangeStatus?status=isDeleted', temp).then(
            res => {
                console.log(res)
                alert("Recipes Deleted SuccessFully ..");

            }).catch(
                err => {
                    console.log(err)
                }
            )
    }
    function recepiapproved(_id) {
        // alert(_id, "id")
        const temp = {

            recipeId: _id,
            ownerId: user
        }
        console.log(temp, "temp")

        axios.put('/recipesChangeStatus?status=approved', temp).then(
            res => {
                console.log(res)
                fetchData();
                // alert("you are approved successfully......");

            }).catch(
                err => {
                    console.log(err)
                    fetchData();

                }
            )
    }

    function recepiunapproved(_id) {
        // alert(_id, "id")
        const temp = {

            recipeId: _id,
            ownerId: user
        }
        console.log(temp, "temp")

        axios.put('/recipesChangeStatus?status=unapproved', temp).then(
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

    function recepidraft(_id) {
        // alert(_id, "id")
        const temp = {

            recipeId: _id,
            ownerId: user
        }
        console.log(temp, "temp")

        axios.put('/recipesChangeStatus?status=draft', temp).then(
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

 //  console.log(GetAllRecipe, "GetAllRecipe");

    return (
        <div>
            <div>


                <div class="content  px-5 py-5">

                    <div className=' '>
                        <table class="table table-striped table-bordered h-100" >
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Cook Time</th>
                                    <th scope="col">Prep Time</th>
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">Recepi UPDATE</th>
                                    <th scope="col"> Recepi DELETE</th>
                                    <th scope="col"> Status </th>
                                    <th scope="col"> Recepi Detail Page </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentTableData.map((item ,index) => {
                                    // data.map((item, index) => {

                                        return (

                                            <tr key={index} value={item._id}>
                                                {/* {console.log("gdghdfgsgf", item.recipeId.title)} */}
                                                <td scope="row">{item.recipeId.title}</td>
                                                <td scope="row">{item.recipeId.description}</td>

                                                <td scope="row">{item.recipeId.cookTime}

                                                </td>
                                                <td scope="row">{item.recipeId.prepTime}

                                                </td>


                                                <td scope='row'>

                                                    <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} alt="fftgh" style={{ width: "180px", height: "150px" }} />
                                                </td>
                                                <td scope="row">

                                                    <a href={`/recepiupdate/${item.recipeId._id}`} onClick={() => selectUser(item.id)} >

                                                        <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Edit</button>


                                                    </a>
                                                </td>
                                                <td scope="row">
                                                    <a onClick={() => recepidelete(item.recipeId._id)}>

                                                        <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Delete</button>

                                                    </a>
                                                </td>

                                                <td scope="row">

                                                    <div class="container" >
                                                        <div class="dropdown">
                                                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{item.recipeId.status}
                                                            </button>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown" onClick={() => recepiapproved(item.recipeId._id)}>Approved</a></li>
                                                                <li><a class="dropdown" onClick={() => recepiunapproved(item.recipeId._id)}>UnApproved</a></li>
                                                                <li><a class="dropdown" onClick={() => recepidraft(item.recipeId._id)}>draft</a></li>

                                                            </ul>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>

                                                    <a href={`/recepi/${item._id}`}>


                                                        <button className="btn btn-outline-primary ml-2 my-2 my-sm-0" >View Detail</button>


                                                    </a>
                                                </td>

                                            </tr>

                                        )
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
        </div>
    )
}

export default RecepiList;