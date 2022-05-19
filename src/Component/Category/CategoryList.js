import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { AllCategory, DeleteCategory } from '../../Config/Commonapi';

function CategoryList() {
    const [data, setData] = useState([]);
    const [categoryName, setcategoryName] = useState("");
    const [image, setImage] = useState("");
    const [_id, _setId] = useState(null);

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
    console.log("student", student.data._id)
    const user = student.data._id

    function categorydelete(_id) {
        alert(_id, "id")
        const data = {
            categorId: _id,
            ownerId: user
        }
        console.log(data, "data")

        // fetch(`http://95.111.202.157:8001/api/deleteCategory?categorId=${_id}` ,data,{
        //     method: 'DELETE',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     })

        axios.delete(`/deleteCategory?categorId=${_id}&ownerId=${user}`, data).then(
            res => {
                console.log(res)

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


                    <table class="table table-striped table-bordered h-100" >
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
                                data.map(item => {


                                    console.log("gdghdfgsgf", data)
                                    return (

                                        <tr>
                                            <td scope="row">{item.categoryName}

                                            </td>
                                            <td scope='row'>

                                                <img src={`http://95.111.202.157:8001/${item.image}`} alt="fftgh" style={{ width: "110px", height: "110px" }} />
                                            </td>
                                            <td scope="row">
                                                <a href="/categoryupdate" onClick={() => selectUser(item.id)}>
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

            </div>


        </div>

    )
}


export default CategoryList;