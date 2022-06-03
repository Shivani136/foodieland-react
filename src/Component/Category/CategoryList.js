import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { AllCategory, DeleteCategory } from '../../Config/Commonapi';
import Pagination from '../Paginations';
import '../../../src/style.scss';

function CategoryList() {
    const [data, setData] = useState([]);
    const [categoryName, setcategoryName] = useState("");
    const [image, setImage] = useState("");
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

        await axios.get('/getAllCategory')
            .then((response) => { setData(response.data) })
        //.then((response) => { console.log(response.data) });

    }

    function selectUser(id) {
        let item = data[id - 1];
        setcategoryName(item.categoryName)
        setImage(item.image)
        _setId(item.id)

    }

    const student = JSON.parse(localStorage.getItem("userdata"))
    // console.log("student", student.data._id)
    const user = student.data._id

    function categorydelete(_id) {
        // alert(_id, "id")
        const data = {
            categorId: _id,
            ownerId: user
        }
        //  console.log(data, "data")



        axios.delete(`/deleteCategory?categorId=${_id}&ownerId=${user}`, data).then(
            res => {
                console.log(res)
                alert("Category deleted SuccessFully ..");
            }).catch(
                err => {
                    console.log(err)
                }
            )
    }
    return (
        <div>
            <div class="content  px-5 py-5">

                <div className=' '>
                    {/* 
                    <Paginations /> */}
                        <div class="table-responsive">
                    <table class="table table-striped table-bordered h-75" >
                        <thead>
                            <tr>
                                <th scope="col">Category Name</th>
                                <th scope="col">Image </th>
                                <th scope="col">UPDATE</th>
                                <th scope="col"> DELETE</th>

                            </tr>
                        </thead>
                        <tbody>
                            {

                                currentTableData.map(item => {
                                    // data.map(item => {


                                        //console.log("gdghdfgsgf", data)
                                        return (

                                            <tr>
                                                <td scope="row">{item.categoryName}

                                                </td>
                                                <td scope='row'>

                                                    <img src={`http://95.111.202.157:8001/${item.image}`} alt="fftgh" style={{ width: "100px", height: "100px" }} />
                                                </td>
                                                <td scope="row">

                                                    <a href={`/categoryupdate/${item._id}`} onClick={() => selectUser(item.id)}>
                                                        <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Edit</button>


                                                    </a>
                                                </td>
                                                <td scope="row">
                                                    <a onClick={() => categorydelete(item._id)}>

                                                        <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Delete</button>

                                                    </a>
                                                </td>

                                            </tr>

                                        )
                                    })
                                }


                        </tbody>

                    </table>
                    </div>
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


export default CategoryList;