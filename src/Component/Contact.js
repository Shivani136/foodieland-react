import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Assest/Contact.css'
import { AddContact, Subscribe, GetAllRecipe, SiteOptions } from '../Config/Commonapi';

function Contact() {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [enquiryType, setEnquiryType] = useState("");
    const [message, setMessage] = useState("");
    const [_id, _setId] = useState(null);



    useEffect(() => {
        fetchData();
        SiteOption()
    }, []);
    async function fetchData() {

        await axios.get('/v1/getallrecipes')
            .then((response) => { setData(response.data) })
        //.then((response) => { console.log(response.data) });

    }
    async function SiteOption() {

        await axios.get('getAllSitOptions')
            .then((response) => { setList(response.data) })
        //.then((response) => { console.log(response.data) });

    }

    function contact(e) {
        e.preventDefault();

        const datas = {
            name: name,
            email: email,
            subject: subject,
            enquiryType: enquiryType,
            message: message,
        }

        axios.post('/addContactDetails', datas).then(
            res => {

                console.log(res)
            }).catch(
                err => {
                    console.log(err)
                }
            )


    }

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


    // console.log(AddContact, "AddContact");
    return (
        <div>
            {/* navigation  */}
            <div id="page-content-wrapper">


                {
                    list.slice(0, 1).map(item => {
                        console.log(item, "item")
                        return (
                            <div>
                                {/* <p>{item.title}</p> */}
                                <nav class="navbar navbar-expand-lg navbar navbar-light bg-light border-bottom  fixed-top ">
                                    <div class="container-fluid">
                                        <img src={`http://95.111.202.157:8001/${item.logo}`} class="img-fluid" alt="fftgh" style={{ width: "140px", height: "30px" }} />
                                        <div class="collapse navbar-collapse mx-auto ml-5  mx-3 my-3">
                                            <ul class="navbar-nav mx-auto ml-5">
                                                <li class="nav-item active ml-5">
                                                    <a class="nav-link mr-sm-4 ml-5 text-dark text-uppercase" href="/"><b>Home</b> </a>
                                                </li>
                                                <li class="nav-item ml-5">
                                                    <a class="nav-link active mr-sm-4 text-dark" href="/recepilist"><b>Recipes</b> </a>
                                                </li>
                                                <li class="nav-item active ml-5">
                                                    <a class="nav-link mr-sm-4 text-dark" href="/bloglist"> <b>Blog</b></a>
                                                </li>
                                                <li class="nav-item ml-5">
                                                    <a class="nav-link active mr-sm-4 text-dark" href="/contact"> <b>Contact</b></a>
                                                </li>
                                                <li class="nav-item ml-5">
                                                    <a class="nav-link active mr-sm-4 text-dark" href="/about"> <b>About Us</b></a>
                                                </li>
                                            </ul>
                                            <div class="form-inline my-2 my-lg-0">
                                                <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook  mr-sm-4" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg></a>

                                                <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter mr-sm-4" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></a>

                                                <a href={item.instaUrl} class="text-dark">  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram  my-2 my-sm-2" viewBox="0 0 16 16">
                                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg></a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        )
                    })
                }

                {/* <div class="sidebar-logo  mr-5">
                            Foodien Land
                        </div> */}






                <div className='banner'>
                    <h1 className='banner pb-3 pt-3'>Contact US</h1>
                </div>


                <div class="container-fluid pt-5 pb-5">
                    <div class="row ">
                        <div class="col-sm-5 pb-5 ">
                            <img src="https://st2.depositphotos.com/1158045/7470/i/600/depositphotos_74708117-stock-photo-smiling-chef-in-his-kitchen.jpg" class="float-left img-fluid" alt="description"
                                style={{ width: "480px", height: "500px", borderRadius: "36px" }} />

                        </div>

                        <div class="col-sm-7   ">
                            {/* <p>Sed ut perspiciatis...</p> */}

                            <div class="row  ">
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
                <div className='pt-3'>
                    <div className='container-fluid pt-5 pb-3'>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMmMUwsaaDSDhZOSOq7H6jG9NHXsX6txVBA&usqp=CAU"
                            class=" img-fluid" alt="description"
                            style={{ width: "1200px", height: "500px", borderRadius: "46px" , }} />

                        <div className='centere '>
                            <h1 className=''>Deliciousness to your inbox</h1>
                            <p className='text-muted pt-3 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum iusto</p>

                            <form onSubmit={subscrib}>

                                <input type="email" class="form-control form-rounded rounded-pill p-5" placeholder='your email address'
                                    value={email} onChange={(e) => { setEmail(e.target.value) }} required autofocus />
                                <button class=" centeredd  btn btn-lg btn-dark rounded-lg  ">subscribe</button>

                            </form>
                        </div>
                    </div>
                </div>



                <div className='pt-5 pb-5'>
                    <h1>Check Out The Delicious Recepi</h1>
                </div>

                <div class="container-fluid pt-5 pb-5">
                    <div class="row">
                        {
                            data.slice(0, 4).map(item => {
                                // console.log("list data", list)
                                return (
                                    <div className='col-md-3'>


                                        <div className='sa pb-5'>

                                            <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} class="img-fluid" alt="fftgh" style={{ width: "320px", height: "250px", borderRadius: "36px" }} />
                                            <h6 class=" pt-4 pb-3">{item.recipeId.title}</h6>
                                            <div className='float-left'>
                                                <p class="text-muted ml-4">{item.recipeId.cookTime}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left mr-2 text-dark" viewBox="0 0 16 16">
                                                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                                    </svg>
                                                </p>
                                            </div>
                                            <div className='float-right'>
                                                <p class="text-muted mr-4">{item.recipeId.categoryId.categoryName}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left mr-2 text-dark" viewBox="0 0 16 16">
                                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                                    </svg>
                                                </p>

                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }



                    </div>


                </div>



            </div>




            {/* footer */}

            <div class="navbar navbar-expand-lg navbar navbar-light bg-light pt-5 pb-5 border-bottom">
                <div class="container-fluid pb-4">
                    <div class="float-left ">
                        {
                            list.slice(0, 1).map(item => {
                                console.log(item, "item")
                                return (
                                    <div>
                                        {/* <p>{item.title}</p> */}
                                        <img src={`http://95.111.202.157:8001/${item.logo}`} class="img-fluid" alt="fftgh" style={{ width: "120px", height: "30px" }} />
                                    </div>
                                )
                            })
                        }
                        {/* <h4 class=" font-italic text-dark pt-3  ">Foodien Land </h4> */}
                        <h6 class="float-left text-muted pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>



                    </div>

                    <div class="mx-auto">
                        <ul class="navbar-nav mr-auto ">

                            <li class="nav-item active ">
                                <a class="nav-link mr-sm-4 text-dark text-uppercase" href="/"><b>Home</b></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link  mr-sm-4 text-dark" href="/recepilist"><b>Recipes</b> </a>

                            </li>
                            <li class="nav-item active ">
                                <a class="nav-link mr-sm-4 text-dark" href="/bloglist"> <b>Blog</b></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active mr-sm-4 text-dark" href="/contact"> <b>Contact</b></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active mr-sm-4 text-dark" href="/about"> <b>About Us</b></a>
                            </li>

                        </ul>

                    </div>


                </div>

            </div>

            <div class=" navbar-expand-lg navbar navbar-light bg-light pb-5  pt-5">
        <div class="container-fluid pt-1">
          <div class="mx-auto bg-light text-muted">
            <h5> @2020 Flowbase.Powered by <span className='text-danger'>Webflow</span> </h5>


          </div>

          <div class="mx-auto">
            {
              list.slice(0, 1).map(item => {
                console.log(item, "item")
                return (
                  <div>
                    <div class="form-inline my-2 my-lg-0">
                      <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook  mr-sm-4" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg></a>

                      <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter mr-sm-4" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg></a>

                      <a href={item.instaUrl} class="text-dark">  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram  my-2 my-sm-2" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg></a>


                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>



            {/* <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CeSk3ObtMLy/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" 
            style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                <div style={{padding:'16px'}}>
                    <a href="https://www.instagram.com/p/CeSk3ObtMLy/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                        <div style=" display: flex; flex-direction: row; align-items: center;">
                            <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;">
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column',flexGrow: '1', justifyContent: 'center'}}>
                                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', marginBottom: '6px', width: '100px'}}>
                                </div>
                                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', width: '60px'}}>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: '19% 0'}}>
                        </div>
                        <div style={{display:'block', height:'50px', margin:'0', auto :'12px', width:'50px'}}>
                            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-511.000000, -20.000000)" fill="#000000"> <g>
                                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
                        <a href="https://www.instagram.com/p/CeSk3ObtMLy/?utm_source=ig_embed&amp;utm_campaign=loading"
                         style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; 
                         font-weight:normal; line-height:17px; text-decoration:none;" 
                        target="_blank">A post shared by foodieland (@foodieland555)</a>
                    </p>
                </div>
            </blockquote> */}
            {/* <script async src="//www.instagram.com/embed.js">
            </script> */}
        </div>


    )
}

export default Contact;

