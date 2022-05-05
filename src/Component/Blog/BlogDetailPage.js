import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Assest/BlogDetailPage.css'

import { GetBlog } from '../../Config/Commonapi';
import { NavItem } from 'react-bootstrap';

function BlogDetailPage() {
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);
    const [video, setVideo] = useState([]);
    const [cookTime, setCookTime] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [_id, _setId] = useState(null);

    useEffect(() => {
        fetchData();
        blogdetail();

    }, []);

    async function fetchData() {
        await axios.get('/getAllBlog')
            .then((response) => { setData(response.data) })
        //.then((response) => { console.log(response.data) });

    }

    function blogdetail(_id) {
        axios.get(`/getBlog?id=${_id}`).then(
            res => {
                console.log(res.data)
            }).catch(
                err => {
                    console.log(err)

                }
            )
    }

    function selectUser(id) {
        let item = data[id - 1];
        setTitle(item.title)
        setDescription(item.description)
        setCookTime(item.cookTime)
        setPrepTime(item.prepTime)
        setImage(item.image)
        _setId(item.id)
    }
    console.log(GetBlog, "GetBlog");
    return (
        <div>
            {/* header */}

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
                    <h1 className='banners pb-4 pt-5'>Full Guide To Become a Professional Cheif </h1>
                </div>

                <div class="container-fluid  pb-5">


                    <h6 class="text-dark font-weight-bold pb-5">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAwwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwQFBgEAB//EAEAQAAIBAwMBBgUBBQUGBwAAAAECAwAEEQUSITEGEyJBUWEUMnGBkaEVQrHB0SNScpLwBxYzYoPhNUNERVNj8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAyEQACAgEDAgMGBQUBAQAAAAAAAQIRAwQSITFBBRNRFCJhcZHwFYGhwdEyQlKx4SPx/9oADAMBAAIRAxEAPwD5PVR3QhQOggKQ6CApEqCAoJIICkSQYFBIICkMICgkkexQOgsUrHQSoT0oH0DbCptX7mgVAYosdHMUAdxxQFHMUWFHsUwotuzdqNQ7QabARhBOHk/wJ4m/RTSl0Kcz2Y3Ija7c/Ha1e3J/8yZiP4fyqXwDBDbiiiARSLKB20wo5igVAkUCoHFMVEapGWjoFAwgKiTSDApEkhiqT0FBJIaVCrt4JoJJHAKRJIIClZKgsUrJUdAosdBAc0h0GxH7tOwoDFIdHsUBR7FOwo9iiwo6BSCj2KdhRoex+LZdY1NhxaWRVfd5DgD8BqOvBj1i3bca7szhB6tyfOpWa69DhFAqBIoCjmw4z5UEQSKYmgMUEKIoqRlDApEkggKROhiryM9KCaQ4hU/4Z69aRJROAUmyxRDApWTUQgKVj2hAUiSidC0WS2ndtFj2nQvtRYbT22ix7D22iw2HttFhsO7D6UBsOYoDYe254phtNFj4LsGDwG1K8J480QYH2zvos58lv1df4r7/ANmbI9aZto5igVHlTPXgUyDOOQeEyAKYqEtQKgaBURgtSsyJBqtIsSGKtBNRDVaiyxRDC0WWKIYWo2TUQwtIkonQtKyaiEFPpSJqIQWkPYdC0WPYd20WS2HttFhsPBaLDYEsZb6etFhsOuABtWixbBe2nY9pwjAJosi4Gk7ZoLRNJ0pePhLNSwAx428TH8lql2OZoV5ksmX1f3+xmSKLNzicxjmmRaPSMWxkYx6UENovFMjQJFOxUBigVEZRUjKkMUUi1RGqtRstURirSLVEMLSssUQwtKyaiT9J0e91edoLCHvHRN7ZYKFH1NVzyRgrkQy5IYknNiriyntLl7a4iaOVPmU44/0KUMkZxUo9C6FSjuQJwAFBz6mpFihYO2o2T2hbaB7T2KCW09tosNp0DBoHtCfBA20WJQ9QMAdaLHtPEDn2607I7CboFiup63Y2RwUmmUPz+4OW/QGpIzauXk4JT9EO7U3Z1DtDfXJOQ8pA9gOP60FGgxeXp4r7+6KnFM0uIJFSsrcQCKCtoAimQoEigVAbaYqEopJwBUjMkP2BVC4BPrUWXRiEi4pFyiNC5qBaoh7aRYohBfaotligfUP9mumi10Ka+lXx3suE9e7Tj9W3fpXK1+aqgcLxHI56jYv7f9sw/aW4W51y+eNsx98VGP8Al8P8q3YFtxRXwO1pMdYY2VdWmpRO4oHR7FBJRO4oHR7FFjoJUZ2CopZicADkk+lKxOoq2bbQOwFxcBJ9WZ4UPPcJ83ljJ/PH61nnn5qJxNV4vGNxw/U1Vr2f0/TYGjtrSPxfNlQzN54JPPX1/FUTc31Zy56rJmlcmKuxbwqwMEWScfL5dPTnoeuPpVMm4onDdJ9WQI5YonHw9tAs0RbuikWDg8EAnpnnnrzUseokpVZLJilKDttpmbu+zEN0TNZTtGWBIjlw5Y9TyCCPPyNbY53/AHGzH4g4JKaszd5YXNk4S5iZM/K3k3uDWlST6HSx5YZlcWRWWpIlKADLTTKnEWwqRU0ARTItHNh9DQRA+TwjB4602yiMTqio2XxiNUUmy6MRqioNl0Yh4qNlqiW3ZqPTZdXt4dXR2tpTs3RuVMbHoePKqsjajcSjV+bHC5Ynyj6tqqw6HophtiRFZWhCZ6nA4P1zXByyebVJHm9Puz5Nz6yZg9T7HLb9mLHV7G4kmaSAS3ET4O0YySpA6D0Ndl6iCmoN9Tt6fxFy1M8GRUk6T/kygxnGRn061fZ2KO4xQNRGTW8sAj76Jk7xBIm4Y3KehHtwaVhCUZXtfTh/MDbxRZOj2Kdj2m57AadbWa/tnUIneXJW1hwOV6F/bzAzWPUauGF1I8541qJS/wDCDpd38fQ2smvSBdsWnRheuXfJH4FZvboviMDzmyN8yZEl1d34n0+QiTwoI5N3JPoafnuUeUSjljB9SE9wJdy+KOZSVSNWGd39M1RBwnybseohLpyV88JkDmRsEHJ3MTz7np5jihp8NG2MkuCP8QtsojmkijAjaQKxyWUHHAGec5A/Na421yZptW6Hy2tvfLtVTdRuqnkLzzk4DYI6j08/bNqk49CMMksb3xdMxer6O9iXkjkSW2DlQy9UOcYI9R/StimnR3tJrIaioviX3yVLLViZplASRUrKJRBxjmnZBxC70+gp2Q2EVRQVpDEFItiiw0nTrjVL+CyslDTzNhQxwBxkk+gABquckuSWTJHDBzl0Rb2ujx6Z2ot7HtAFSAPlmB8Djy59CcVnnl3Y3KHLRCWZ5dO54OpuNO7I2Mfa21vI4EaxIdmt25CPjg4816/Q1i0evWW4z6o5WfX5fZXC/e9fgS9N7MXundubrUreK3TTpkccOBt3Acbf8Q/WllzN4dql7xXm12PLoo4pN70WuqWdrfPLaXm8W8y7W2HBA9q5MMqhqVNlGHJkxxU4dUEbG3sdMgtrFi8EKgKHOTgVLU5fM9+BGOWeXK5ZOrKttE0efRJdNljigDlmhkWIboyTnr54Jx9K0w8QTalJmtajUwzrLF3XVWI07sTokOBKi3G35pZZSS30UYA/11qftmSbvckv1J5vFdU+jr4Jfv1J3arszbalY2NhBItt8OB3cjjdtXoR71Y9UsWWKk+GjP4f4hPBOeWSu+y9TF9r9B07QtPtY7QyyXLzFXmdvmUD06DnFX6fV+fOSXRHoPC9Zn1eWTnSVdPz/UzdpZT3ryJaxNIyIXYAZ4H860TzQxpOTOtmz4sCUsjq3R9I7MQTS6daW5iKSd0Eww6Y45/jXC1P/rqag+p4vxOUXmlKMrVsl6pLbWXfNfGQCFtoVZAhYHjJ48yeOaitzls7/wAHHtydJBaXb295309pZrHPGmUkfLHd6Ak9f500sjtX2IXZlLtTDbXzPOiTQyKIY5DtycnOTirsXWPx6jfDpES41FIbO4M94FjthE84CnbubzHAzjjn+la4RnOSaXW6/IshqskejBt722uHkEVqHd1/s13gNuPkW9OtaFFy4Ztx6pS56Mfp9/dibuXeWOVkOFbqR1yCwPkMjjmltafBfujJGomS31KOUSyCSOdgFiUDqRjJyOP64q6E+7K7likpR6o+XajZS2F3JbTKQyNgH+8PIj61pTPY4skc2JZI9yCw5qaK5RAamVULxQKhS1Mzo1vZjStD1awMVy9xFfI53skg5XPBCkVztZqsunkvduJTllmhK49PkaLT+xyWd5He6Rr7W80RJUT2+c54wSD0I46Vl/EsU41PgzZNXKUdmTGmvgzS63pcWqwomoQQXICjmCTxKfPB4NYPaMuLJvxyTX31MunzPE/dbi/j0O9nbaS2tfg5L0P3J/sGlG2Tb6N649fSqs0oZZbo+6xaqe6W9R69a6FkISbhLid4iEyOJMA/UeZqpd5Too3rbsjZ2+A2pKuCCOoqOZe6poeC+Yshs0MNv8S86RKTgjdgn7U4Y4uKmi9bpS2JWILRTIGygRuQzdBVG1btr4Lfei67hItuE73vQ8XCgDjJPHFTeGC5ISc29tUx3aKQXkqwi4aEKI28I5bBzt++PxV+fNuzbmrpUivQxeNOVX1/+lHqmkR6ve2qXVyGiRXZo428W7I6noBgVPTaiOnxtpctnR0+rlpoSeOPLrn4ErStGGj2C+AqZVXvDG/zkZ5+pzwPaq9blyZZW+Y9fl8zl+IazJqsrvlJuvgTEvDp5JgO6GSMlgkYL7j+8fTGcVHBmnBNRXLMDxPckymeyS8tpJ9RktbXOGhEoXlgcjcM58v1NWY5rHxjt9i/HppJ9LE3B0ODSZrO+1CeaGRxJJ3ZIUODknjoCeea0Yp6q7xw+qJLSKLu6LZhousQJeRPbOjjxLuAIPuKplCeKVy4b7E4wi+GrKXVuz9jLI9xJqESg8nvZFK/fP8AOtGPLOPCQPTY2jC6xoV3DcG50y5hu0AGfh5VYj7A811tPqYuOyar5mTJp65g7E6frT/EpDfxsZIuN2cNHx/3rTkx8WhY80oOmfQezWptPEYxOF3kxoOpxt/19KwP3ZUdCLWSKZTdurdBcWt2ilBIhjZD1Ur6+/Nasb907/g024Txvtz9TJOKuTOnNCWqZnaApkRIqRmihsbEMGUkMOhBwRUXz1LkrLO21rUrcgx384A8i2R+DWWWmwy6xQ3p8clyj6hZx2dvpELatrBNzJGJHdSiKuRnHviuNmWnU9uODbPPZFmyZH5UOPzK6TVoLdtsWsWlwhPGZAT/ANqzvSyl/Y0aYaXPXMGWdrqcU0QSbwg9DuyPqKyzxOK2tEHiknfcfb3rxyi1fDxt05/FOFpbWLJhUlvXDIN7apPcksflABXHX3pweyJpxZXGKSJljpcsmnPH3iiDBw7Hp6inONvezNm1MY5U0uRmtSztpKraKI7WPaEXPDBMH88Z5qyeWWSafSL4KdPCMcnv8y/kzGqas91cRyE7SVGQD9qnjxNJ2a8ajjTSC/bcOmRs0pzMw8Ma/Mfr6CiOjlm46I1YNHl1TuuPUr7PtNNea1Z/tObu7BZgzxx9PbPrz+ldCGixYotRVs6ObwuGPSzWJXOu5f6v2isZpJo07uSCEc4OVc84Vh5DPNbouKiopdDyns8or3jN6XqdtGuo6rcJFNNGuy1V1z3bZJJ6eZzz1AFWpKKUaFL3pOTfCAvu0du9tFDbj4mQ4DSdyUBc8E89Oefp9KtWJN8lfmccMS8iFVu4r12kTcu0W4VXbz6nkDGMeec8VmnhtuMo8PvZLzZNIpP2tHK0k8MTMkbHvI42JEYzwfcHND0LUepD2m2PFnomssHhhFtcHpLaSbWB9x0/QVCOXU6b3Zu18SucIZPejwyPe6RdxorTs17ZMo2XqL/axjyDr+9/rnyrRHNil/Tw/Tt/wolGXRkvS47nT3hkWQPbnxLJG2QfofL6HpVGWpcvqPDlcJUW/a/UY7tbKJHZiqb2z79PvTw2kew8GxvbLL2fCMu1aEdaYtqmjMwOaZAQKk2URTGLUGy6KGLUS+KGdT5n61DoWxjXQIVFlqTNsliltpFjFCWjlchpmU/NxzWd4o5G3JHltXqZyzPnuTmCKIVMkp2fKS+SPbNVex43yV+e+gq41ZvipCqcBduSevOelR9gx1QvNpURb7tFf/BNbQyCKMsTkE9fz0prQY+nYq3x3b65M1cdoNXSI2rTARE87SR/PitENBgu6K56mV3SEQahNJMrFgNnSrvZcaXQp9pmaS10uHVYBe3t/b2MCybZJpCN78DhQOSapybcdJHX8M8SzQUsUYub4penz9EXkDdm9NhjfS7FL9upuLsZ9sgEYBz7Vz8mpzuTjFbf1/4hZMviGpzSxZJ7K7Lj9U+fqKbtJNNBJDIkbKzcEwqAq+nFJ48s2m5v6lcvBZpf1/f1Km9ezfFo+l2mx2DEITZO3uSvgP361sx5c0f6v9X/ANMM9DqcSbjz8uTPTSaTPeSaTp8FxBbtKf7ZjnJA4Iz0BI4OB15rTuzxj5spL5GVabPLiMefQkLYaRcWUUd1rs8Tp4TbtEkm305VgD9qctRNPiFi8jPFVONEu003RtOtpNXge/CqVtiZAIUmYnnwYJOAM9fKqJ6rPOXlRSvr619ChyqXBZQ9m+ySyLaub6J1AZZI5lYOD0IJXOPassvENVt3OKZZHlCta0ltHhW90rVbi5skGLlbgKXiHkTtAyvr6ceXS/S5cGqtOO2RGUpRdXZC0R7W4nnlGF79y8e1c48s0s7aqM+xjmpKV1Yq40u4udUlj2qhKb1YKdr4wOPTPp5VdDJDamme5w+KabBo8c4ttXXa135+RRt0rQmjsSANTspkgalZVRql7L2jdGlB/wAVbfJizx68Xzr0+hIi7J2X78kv+al7PD0J/jWp7V9CUnZHTiMd7Ln/ABUez4ya8c1S9PodPY2wXk3DAe7Co+y4ya8e1PovoC/ZfSUHN6x9hyaPZMZNeP6v0X0HX5MUsSoSUCgqT5jFYnDa2ih5HN7n3FyTncAoHTrjpQog5FfcyYPh+9G0W4qbubGRjp5UKInIpbmckkVdGJTKQuCUhhipNFVmu0S1jvLCV51ZgjDaq8Esc8VnzSx44bp/ka9J4hk0cnLH1fBr2/2f2riAw3i+HBPer4s9cBlI4+tcfD4i07XD9L/n/hLNrtRkm5z5ZV6/2RubPa9vbmduNzCAMc9c8HdXQx+KR6ZVT9H+z6CxahroipXSdWe376GweWIs39lOjKeB+6G8X3zzWl6rRzlTr6o1Q10k+e35lJNJDkmSG4tpVyOoIH68fc1PycLVQlXzNPt8H1EzTXcZ3MiTLjI3ptfH1/8A2q3pEuF+hKOsg+U7+/Uj3N/b30aw3LP4fkjmYjb7rzx9qhHDkxPdH9An7Jn4mqf33FJdT2roBMZIV6JKxBUf8rjkfg0/LhNO1T++xzNT4a4845fU0em6jcTaihiSPukHdpGXUhx5k5JLZ9/xWHLiWKN3z1v74RwskZxfvFq2lRxIP2ehaIHPdKfHFnkr/h9Kp3PN7/fuQ6qyy021WNCzEkuMOvmPardNjXnRc+lkU9sk12JK6Dpj4xpoGR1OK9QsON9EdX8W1nfIzv8AuvYH/wBKq59gafkQ9Bfiuq/zZz/dGyPIjj/y0vIgP8W1P+R0NCvVSfcEf0pmA8046J3gH0FA0CJE/f3j6g80iSPb7dumT9RQSQxBAOWjyPY0hkfVkhkijaEEKvhxnJrHnhUtyNOGfFMpZZgoKeX8aoLrKy7mAyA3Pv51KhWUt1Puyo6U1Ei2Vz5JyR51ZRWMtUy4GM85ooiz6PbRnS9Gt7BFila4UNcAcklm+T7AD8mudrp+XmhF9FyVRnU02Gmp5V44L24tRb5BjRQQvOAAMex4qqek02aW+ULvvZ1VNNcMSnbXWtODhLiPULdGK8x926kY8IIyGPI4wDSl4dBxUccnH9V+pQ1FtykrHSdvddgHeS6aoQjPMnP8MVR+EbumXn5E2oV/R+pX3XbK2u1L3Glx5bnvO4WQN+mTVUfCc8H7s/1ofmYl/aZ7UdY0u5jCobS32ZwIk2EfUYrfg0+pxvu/m7K5ZcXYqJTDdQkxqHTJUNjbyMZ4PHmOnrXRjlyR4kUz1MWq6kezspVciWVVi2nwHOc+WMClkyRa4XJXDVzgqi+CV+y5pENxbnLxAyKq5DYHXb6mqVngpbJdxS1KnxJFzDqs9ygEWJQVBeNxyD6j28+PWsuXBGMrXBzciqXHQt9Dn7u8h+KeMRlxuRn3MOemOtVY443lj5nRdWEUbWHU9JjVYUkK7RgLg8edegjrNLCKSlwSuyes9uFyJuD5E1tTTQmmc+Kh/wDmT8VIOSkSFCfFtArNZcSY7SM9Dx7CkA34KA8M/wBjxRYwTa2KnMjNkejUWS5DMOnKMgsfo2aLHciLddw8bRLGdrDHTFKS3KmTja5MfrANnIUlbryDjGaxSxyi6o1RyRfcztxeREkGVP8AMKEiVor5bu2UkmZP8wqSiyttepGN7A5xG4Y+xqWxkHkiXOizJayrckK7qcqrA4B9atjGuWKFT6mkj7T3zlgtv3m4bSVjOcZz1qjU6XBqGnkXQn5MfUupNHj1bTlvViMSPHvkTHj3AkHJ4AOevsa4ezNpZuC5S9f4JQWRcLlEOz7IXSThheQyRSqHx32NpK4OPU/L6cCrXqptUkFZ76C9Xg1NrVo3s0laNeWt23Bx7Dr5Vbi1EJy60aN7SpowWofFhxHcJNEY8jaEKhc10YyizPKUmR7GymlEzCN1GMiSRcYPqMjJpzywjVszbq6l3FZzXNk6Wlm1vApMqGeEgchQcsW6+EeXtWCeaKyJSlb6cP8Aav3KlHcyPBp+wkz7riQ87ixCj6DzqyeauFwaY4UPDS2LZV2VRjao5qhpZOxTkxtMYEiksTdAd06y7NqfKc85Hp9KTk1PZ14Mkolxo9hi3M6gu/IwOvPpWWe7JNQiJLmi1to2nZiseQOGBFX6Lw6WaXv8JfAltSkTHd+rsv0r1KVKiVg9+nqKkKzRrp8ajnFZ6J2OW2UcA/aigsYLceWD7ZpUM4bRG+aJTRQWCLOAdLdB9qQWe+HQjABX2C0DsF7KGTiTLD0IXH8KBEd9BsW6wxf5RQBHk7P2eN0cUQ/6S0CEfsqJOhT6hAKBgtY/3SpHltWkNBLYz4woTHq9Rdlin6kyFNQtbd1ijimRvmiZtox54NY8+neR2nRdjzqKoWfhhHIlxY3FsWfK+APgZ8mXIx9TWCejyRXCNmPVRl3K9r+0SaWOK5gDsQq75B/Z/wB45z/Cs+zKuGjTuxyp2VktxbluGjYEeFty5/NCm0DhFlRf3RV2XvUA5PlVq95dCmeJMq5tcIh+HmucwqdwXf4SfXFWR07T4RTWKJC/bMJOEbP05q5aeXcg80EA2omY7e6dh05GKthpmiqeeJaW8sclibbuHBJDb1H72aMultqUOq/cySSlzZY2UphTYRJyejdKv0emWF75L3iFJEsF5OFaRvYV0k7ItnTFIeMSD7GpJC3A/DP/APZ+DToN59CHHP8AKqB2EJD5YphYxHOOcUhnS2emB96B2DuHmRmkMMBScAA0Cs7txxtH2NFBYpzsySgGPVqKCwfC3OCc+gzRQWeHd5+UD60UFnSYz0IH0pUFnNy48JH5ooaYJlABwCcUqCyObgDggE5xtzmltHZGnnVm8cQPlz0p7QsgXCWp4NlASTwGjU/yp7RbiHNp1rITjSrbrgYt0P8AKmlRFyFfsyxB/wDC7f6i3A/gKe34Ed3xGJp+mn/2+IHGSDCOKahEi5Mkw2trHzb2kS/9Ic/fFPbH0E22SVkXAXYiHOMFRz+lSSRHk40nGVC58sYp8C5Akd26K4+1NDQkyygcofzTJCjPJn/hGgDToT61STHelAI6tIkR5iQTg0AMg5AzzTAaeKBCZ2YZwSPvSAWxPcsc8460DErI/Hjb80gJAYmUZJ+WmIIgYPApDEgYuWA4AYYHpQAKMfiDyfnNAiVcIohYhRnb6UxMhKA0URIBO48mmhHgqm2Zio3bhzimhBISrMF4BZc4+opiJ1k7brgbjjJ86aIsk6jHH8NI2xc7DzimIzs6qJGwo/c8vakSIlz/AMVfdiDQwI0RPqepoQDiSOQedtSAahyozzTQmFtX+6PxQI//2Q=="
                            alt="des" style={{ width: '50px', height: "50px" }} class="rounded-circle mr-3 border-right" />
                        jhon smith

                        <span class=" border-left text-muted ml-5">12 November 2021</span>
                    </h6>

                    <p class="text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum<br />
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>

                    <div class="container-fluid pb-5">
                        <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            alt="des" style={{ width: '1300px', height: "500px" }} class="rounded-lg" />

                    </div>

                    <div class="row pt-3">
                        <div class="col-9">
                            <div class="col pb-5">
                                <h4 class="pb-3">Hree is FAQ tITLE .</h4>
                                <p class="text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,   </p>
                                <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                    alt="des" style={{ width: '900px', height: "400px" }} class="rounded-lg pt-2" />
                            </div>
                            <div class="col pb-5">
                            <h4 class="pb-3">Hree is FAQ tITLE .</h4>
                                <p class="text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,   </p>
                                <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                    alt="des" style={{ width: '900px', height: "400px" }} class="rounded-lg pt-2" />
                            </div>
                            {/* <div class="col">
                            <h4 class="pb-3">Hree is FAQ tITLE .</h4>
                                <p class="text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,   </p>
                                <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                    alt="des" style={{ width: '900px', height: "400px" }} class="rounded-lg pt-2" />
                            </div> */}
                        </div>



                        <div class="col-3 pt-3">
                        <h5 class="pb-3">SHARE THIS ON. .</h5>
                            <div class="col pb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook  mr-sm-4" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                               
                              
                            </div>
                            <div class="col pb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter mr-sm-4" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                          
                                </div>

                            <div class="col pb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram  mr-sm-4" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
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

                        <div className='blog'>
                            <h1 className=''>Deliciousness to your inbox</h1>
                            <p className='text-muted pt-3 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum iusto</p>
                            <input type="email" class="form-control form-rounded rounded-pill p-5" placeholder='your email address' />
                            <button class="centeredd btn btn-lg btn-dark rounded-lg pt-2 pb-2">subscribe</button>
                        </div>
                    </div>
                </div>


                <div className='pt-5 pb-5'>
                    <h1>Check Out The Delicious Recepi</h1>
                </div>

                <div class="container-fluid pt-5 pb-5">
                    <div class="row pb-5">
                        <div class="col-3">
                            <div class="card">
                                <img src="data:image/jpeg;base64,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"
                                    alt="des" style={{}} class="rounded-lg" />
                            </div>
                            <h6 class=" pt-2 pb-3">Lorem ipsum dolor adipisicing elit. Maxime mollitia,</h6>
                            <div class="row">
                                <div class="col float-right">
                                    <p class="text-muted">30 minutes</p>

                                </div>
                                <div class="col float-left">
                                    <p class="text-muted">Healthy
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left ml-4 text-dark" viewBox="0 0 16 16">
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img src="data:image/jpeg;base64,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"
                                    alt="des" style={{}} class="rounded-lg" />
                            </div>
                            <h6 class=" pt-2 pb-3">Lorem ipsum dolor adipisicing elit. Maxime mollitia,</h6>
                            <div class="row">
                                <div class="col float-right">
                                    <p class="text-muted">30 minutes
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left ml-3 text-dark" viewBox="0 0 16 16">
                                            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg>
                                    </p>

                                </div>
                                <div class="col float-left">
                                    <p class="text-muted">Healthy
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left ml-4 text-dark" viewBox="0 0 16 16">
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img src="data:image/jpeg;base64,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"
                                    alt="des" style={{}} class="rounded-lg" />
                            </div>
                            <h6 class=" pt-2 pb-3">Lorem ipsum dolor adipisicing elit. Maxime mollitia,</h6>
                            <div class="row">
                                <div class="col float-right">
                                    <p class="text-muted">30 minutes
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left ml-3 text-dark" viewBox="0 0 16 16">
                                            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg>
                                    </p>

                                </div>
                                <div class="col float-left">
                                    <p class="text-muted">Healthy
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left ml-4 text-dark" viewBox="0 0 16 16">
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img src="data:image/jpeg;base64,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"
                                    alt="des" style={{}} class="rounded-lg" />
                            </div>
                            <h6 class=" pt-2 pb-3">Lorem ipsum dolor adipisicing elit. Maxime mollitia,</h6>
                            <div class="row">
                                <div class="col float-right">
                                    <p class="text-muted">30 minutes
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left ml-3 text-dark" viewBox="0 0 16 16">
                                            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg>
                                    </p>

                                </div>
                                <div class="col float-left">
                                    <p class="text-muted">Healthy
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

            </div>

            {/* content */}

            {/* <div class="pt-5 ">
                <h1 class=" health pt-5 pb-5 ">Health Japanese Fried Rice</h1>


                {
                    data.map(item => {


                        console.log("gdghdfgsgf", data)
                        return (
                            <div>

                                <div class="container-fluid">
                                    <div class="row">

                                        <div class="col-2">
                                            <img src={`http://94.237.3.78:8001/${item.recipeId.userId.Image}`} class="rounded-circle float-left ml-5" alt="fftgh" style={{ width: "60px", height: "60px" }} />

                                            <p class="float-right font-weight-bold">{item.recipeId.userId.firstName}{item.recipeId.userId.lastName}</p>
                                            <span className='text-muted'>  {item.createdAt}</span>

                                        </div>
                                        <div class="col-2 ">
                                            <p>PREP TIME</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left ml-5" viewBox="0 0 16 16">
                                                <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                            </svg>
                                            <p className='text-muted'> {item.recipeId.prepTime}</p>

                                        </div>
                                        <div class="col-2">
                                            <p>COOK TIME</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left ml-5" viewBox="0 0 16 16">
                                                <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                            </svg>
                                            <p className='text-muted'> {item.recipeId.cookTime}</p>

                                        </div>
                                        <div class="col-2 ">
                                            <p>Chicken</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left ml-5" viewBox="0 0 16 16">
                                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                            </svg>
                                        </div>
                                        <div class="col-4 ">
                                            <div className='float-right ml-3'>
                                                <span class="rounded-circle bg-info pt-5 pb-3 p-4 pl-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-box-arrow-up mx-auto pb-1" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                                                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" />
                                                    </svg>
                                                </span>
                                                <p className='text-muted pt-5'>SHARE</p>
                                            </div>
                                            {/* </div> */}
            {/* <div class="col-2 "> */}
            {/* <div className='float-right ml-4'>
                                                <span class="rounded-circle bg-info pt-5 pb-3 p-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-box-arrow-up mx-auto pb-1 " viewBox="0 0 16 16">
                                                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                                                    </svg>
                                                </span>
                                                <p className='text-muted pt-5'>PRINT</p>

                                            </div>
                                        </div>
                                    </div>

                                    <a onClick={() => blogdetail(item._id)}>submit</a>


                                    <br />
                                    <div class="row pt-5 pb-5">
                                        <div class="col-8  ">
                                            <div class="card bg-info mx-auto border-rounded-lg ml-4 mr-4">

                                                <div class="card-body text-center rounded">
                                                    <video width="860" height="510" controls>
                                                        <source src={item.recipeId.video} type="video/mp4" />


                                                    </video>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="col-4 float-right">
                                            <div class="card bg-info rounded">
                                                <div class="card-body float-left">
                                                    <h4 class="card-text">Nutrition Information</h4>
                                                </div>
                                                <div className='card'>
                                                    <label className='text-muted float-left'>Calories</label>
                                                    <p className='float-right border-bottom'>  {item.nutritionInformation.calories} </p>

                                                    <label className='text-muted float-left '>TotalFat</label>
                                                    <p className='float-right border-bottom'>   {item.nutritionInformation.totalFat} </p>

                                                    <label className='text-muted float-left '>Protein</label>
                                                    <p className='float-right border-bottom'>{item.nutritionInformation.protein} </p>

                                                    <label className='text-muted float-left  '>Carbohydrate</label>
                                                    <p className='float-right border-bottom'>  {item.nutritionInformation.carbohydrate} </p>

                                                    <label className='text-muted float-left '>Cholesterol</label>
                                                    <p className='float-right'> {item.nutritionInformation.cholesterol} </p>
                                                    <hr />
                                                    <h5 className='float-right pt-5'>{item.nutritionInformation.nutritionTitle}</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='content pb-5'>
                                        <h4> {item.recipeId.description}</h4>
                                    </div>
                                    {/* <div class="row row-cols-2">
                                        <div class="col">1 of 4</div>
                                        <div class="col">2 of 4</div>
                                        <div class="col">3 of 4</div>
                                        <div class="col">4 of 4</div>
                                    </div> */}
            {/* <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-8">
                                                <h1 className='float-left ml-5 '>Ingredients</h1>
                                                <div class="col">

                                                    <div class="col">
                                                        <h4 className='float-left ml-5'>For Main Dish</h4>
                                                    </div>
                                                    <div class="col">2 of 4</div>
                                                    <div class="col">3 of 4</div>
                                                    <div class="col">4 of 4</div>
                                                </div>


                                            </div>
                                            <div class="col-4">
                                                <h1>Other Recepi</h1>
                                                <div class="col">
                                                    <div class="col">1 of 4</div>
                                                    <div class="col">2 of 4</div>
                                                    <div class="col">3 of 4</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div> */}


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

export default BlogDetailPage;




