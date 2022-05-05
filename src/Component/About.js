import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Assest/About.css'
import { Subscribe,GetAllRecipe } from '../Config/Commonapi';

function About() {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [Image, setImage] = useState([]);
    const [_id, _setId] = useState(null);

    function subscrib(e) {
        e.preventDefault();

        const data = {
            email: email,
        }
        axios.post('/subscribe', data).then(
            res => {

                console.log(res)
            }).catch(
                err => {
                    console.log(err)
                }
            )


    }

    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {

        await axios.get('/v1/getallrecipes?perPage=4')
            .then((response) => { setData(response.data) })
        //.then((response) => { console.log(response.data) });

    }




    return (
        <div>
            {/* navigation  */}
            <div id="page-content-wrapper">

                <nav class="navbar navbar-expand-lg navbar navbar-light bg-light border-bottom  fixed-top ">
                    <div class="container-fluid">
                        <div class="sidebar-logo  mr-5">
                            Foodien Land
                        </div>
                        <div class="collapse navbar-collapse mx-auto ml-5  mx-3 my-3">
                            <ul class="navbar-nav mx-auto ml-5">
                                <li class="nav-item active ml-5">
                                    <a class="nav-link mr-sm-4 ml-5" href="/home">Home </a>
                                </li>
                                <li class="nav-item ml-5">
                                    <a class="nav-link active mr-sm-4" href="/recepi">Recipes</a>
                                </li>
                                <li class="nav-item active ml-5">
                                    <a class="nav-link mr-sm-4" href="/blogdetailpage">Blog</a>
                                </li>
                                <li class="nav-item ml-5">
                                    <a class="nav-link active mr-sm-4" href="/contact">Contact</a>
                                </li>
                                <li class="nav-item ml-5">
                                    <a class="nav-link active mr-sm-4" href="/about">About Us</a>
                                </li>

                            </ul>
                            <div class="form-inline my-2 my-lg-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook  mr-sm-4" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter mr-sm-4" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram  my-2 my-sm-2" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>

                            </div>
                        </div>


                    </div>
                </nav>



                <div className='banner'>
                    <h1 className='banner pb-5 pt-5'>About US</h1>
                </div>

                <div class="container-fluid pt-5 pb-5">
                    <div class="row">
                        <div class="col-sm-5  ">
                            <img src="https://st2.depositphotos.com/1158045/7470/i/600/depositphotos_74708117-stock-photo-smiling-chef-in-his-kitchen.jpg" class="float-left" alt="description"
                                style={{ width: "480px", height: "500px" }} />

                        </div>

                        <div class="col-sm-7 pt-1  ">
                            {/* <p>Sed ut perspiciatis...</p> */}

                            <div class="row ">
                                <div class="col ">

                                    <div class="form-group ">
                                        <label className='float-left text-muted'>Name:</label>

                                        <input type="text" class="form-control rounded-lg p-4" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div class="col ">
                                    <div class="form-group">
                                        <label className='float-left text-muted'>EMAIL ADDRESS:</label>
                                        <input type="email" class="form-control rounded-lg p-4" placeholder="Enter your email" />
                                    </div>
                                </div>
                            </div>

                            <div class="row pt-3 pb-2 ">
                                <div class="col ">
                                    <div class="form-group">
                                        <label className='float-left text-muted'>SUBJECT:</label>
                                        <input type="text" class="form-control rounded-lg p-4" placeholder="Enter your subject" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label className='float-left text-muted rounded-lg'>ENQUIRY TYPE :</label>
                                        <select class="form-control p-4" >
                                            <option>Advertising</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row pt-2">
                                <div class="col">
                                    <div class="form-group">
                                        <label className='float-left text-muted'>MESSAGES:</label>
                                        <textarea class="form-control rounded-lg" rows="10" ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-5 pb-5'>
                                <button type="button" class="btn btn-dark float-left pl-5 pr-5 pt-3 pb-3 rounded-lg">SUBMIT</button>
                            </div>

                        </div>

                    </div>
                </div>





                {/* subscription text */}
                <div className='pt-5'>
                    <div className='container-fluid pt-5 pb-5'>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMmMUwsaaDSDhZOSOq7H6jG9NHXsX6txVBA&usqp=CAU"
                            class="rounded-lg" alt="description"
                            style={{ width: "1200px", height: "500px" }} />

                        <div className='centere'>
                            <h1 className=''>Deliciousness to your inbox</h1>
                            <p className='text-muted pt-3 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum iusto</p>

                            <form onSubmit={subscrib}>

                                <input type="email" class="form-control form-rounded rounded-pill p-5" placeholder='your email address'
                                    value={email} onChange={(e) => { setEmail(e.target.value) }} required autofocus />
                                <button class="centeredd btn btn-lg btn-dark rounded-lg pt-2 pb-2">subscribe</button>

                            </form>
                        </div>
                    </div>
                </div>


                <div className='pt-5 pb-5'>
                    <h1>Check Out The Delicious Recepi</h1>
                </div>

                <div class="container-fluid pt-5 pb-5">
                {
                        data.map((item, index) => {
                            console.log("ffdfgg", data)
                            return (
                                <div>
                                    <tr key={index} value={item._id}>
                                        {console.log("gdghdfgsgf", item.recipeId.title)}
                                        {/* <td scope="row">{item.recipeId.title}</td> */}
                                    </tr>

                                    <div class="row pb-5">
                                        <div class="col-3">
                                            <div class="card">
                                                <img src={`http://localhost:8001/${item.recipeId.image}`} alt="fftgh" style={{ width: "300px", height: "200px" }} />
                                            </div>
                                            <h6 class=" pt-2 pb-3">{item.recipeId.description}</h6>
                                            <div class="row">
                                                <div class="col float-right">
                                                    <p class="text-dark">{item.recipeId.cookTime}</p>

                                                </div>
                                                <div class="col float-left">
                                                    <p class="text-muted">{item.recipeId.categoryId.categoryName}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left ml-4 text-dark" viewBox="0 0 16 16">
                                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                                        </svg>
                                                    </p>
                                                </div>
                                            </div>
                                         </div>
                                    
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>

            </div>

            {/* footer */}

            <div class="navbar navbar-expand-lg navbar navbar-light bg-light pt-1 pb-3">
                <div class="container-fluid pb-4">
                    <div class="float-left ">

                        <h4 class="float-left font-italic text-dark pt-3  ">Foodien Land </h4>
                        <p class="float-left text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>



                    </div>

                    <div class="float-right">
                        <ul class="navbar-nav mr-auto ml-5">
                            <li class="nav-item active ml-5">
                                <a class="nav-link mr-sm-4 ml-5" href="#">Home </a>
                            </li>
                            <li class="nav-item ml-5">
                                <a class="nav-link active mr-sm-4" href="#">Recipes</a>
                            </li>
                            <li class="nav-item active ml-5">
                                <a class="nav-link mr-sm-4" href="#">Blog</a>
                            </li>
                            <li class="nav-item ml-5">
                                <a class="nav-link active mr-sm-4" href="#">Contact</a>
                            </li>
                            <li class="nav-item ml-4">
                                <a class="nav-link active mr-sm-2" href="#">About Us</a>
                            </li>

                        </ul>

                    </div>


                </div>

            </div>

            <div class=" navbar-expand-lg navbar navbar-light bg-light pb-4 ">
                <div class="container-fluid pt-1">
                    <div class="mx-auto bg-light text-muted">
                        <h5> @2020 Flowbase.Powered by <span className='text-danger'>Webflow</span> </h5>


                    </div>

                    <div class="float-right">

                        <div class="form-inline my-2 my-lg-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook text-dark mr-sm-4 ml-3" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter text-dark mr-sm-4 ml-3" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram text-dark my-2 my-sm-2 ml-3" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>

                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default About;

