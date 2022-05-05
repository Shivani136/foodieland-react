import React, { UseState, UseEffect } from 'react'
import axios from 'axios'
import Temp from './Temp';
import { AllUser, EditUser, DelUser, } from '../../Config/Commonapi';

let limit
let skip;

// const fetchUsers = (limit, skip) => {
//     // Make sure you send 'limit' and 'skip' as query parameters to your node.js server
//     fetch('/getAllUsers?limit=3&skip=0') 
//         .then((res) => {
//             this.setState({
//                 datas: res.data
//             })
//         })
// }





const userList = () => {
   const [datas, setDatas] = UseState([]);
    const [limit, setLimit] = UseState(20);
    const [skip, setSkip] = UseState(0);

    const nextPage = () => {
        setSkip(skip + limit)
    }

    const previousPage = () => {
        setSkip(skip - limit)
    }

    UseEffect(() => {
        fetchData();
    }, []);
    
    async function fetchData() {
    
        await axios.get(`/getAllUsers`)
        // .then((response) => { setData(response.data.data) })
        .then((response) => { console.log(response.data) });
    
    } 
    
    UseEffect(() => {
        fetchData(limit, skip)
    }, [skip, limit])


    return (<div> 
        <div> 
            {/* { 
                users.map(user => 
                    <div> 
                        <span> { user.name } </span>
                        <span> { user.email } </span>
                        <span> { user.lastLogin } </span>
                    </div>
                )
            } */}


            {
                         datas.map(item => {


                            console.log("gdghdfgsgf", datas)
                            return (

                                <tr>
                                    <td scope="row">{item.firstName}</td>
                                    <td scope="row">{item.lastName}</td>

                                    <td scope="row">{item.email}</td>
                                    <td scope="row">{item.phone}</td>
                                    <td scope="row">{item.roleId.roleName}


                                    </td>

                                    <td scope='row'>

                                        <img src={`http://localhost:8001/${item.Image}`} alt="fftgh" style={{ width: "200px", height: "200px" }} />
                                    </td>
                                    <td scope="row">

<a>
                                        {/* <a href="/userupdate" onClick={() => selectUser(item.id)}> */}
                                            <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Edit</button>


                                        </a>
                                    </td>
                                    <td scope="row">
                                        {/* <a onClick={() => userdelete(item._id)}>

                                            <button className="btn btn-outline-primary ml-2 my-2 my-sm-0">Delete</button>

                                        </a> */}
                                    </td>
                                    <td scope="row">

                                        {/* <div class="container" >
                                            <div class="dropdown">
                                                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{item.status}
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown" onClick={() => userapproved(item._id)}>Approved</a></li>
                                                    <li><a class="dropdown" onClick={() => userunapproved(item._id)}>UnApproved</a></li>

                                                </ul>
                                            </div>
                                        </div> */}

                                    </td>

                                </tr>

                            )
                        })
                    }
            
        </div>
        <div> 
            <div onClick={nextPage}> Previous Page </div>
            <div onClick={previousPage}> Next Page </div> 
        </div>
    </div>
    )
}
 
export default userList;