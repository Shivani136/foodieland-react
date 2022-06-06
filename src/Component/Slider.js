import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import '../Assest/Slider.css'
import { GetAllRecipe } from '../Config/Commonapi';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      datas: []
    };
  }

  componentDidMount() {
    axios.get('/v1/getallrecipes')
      .then(response => {
        const datas = response.data;
        this.setState({ datas });
      })
    //.then((response) => { console.log(response.data) });
  }




  render() {
    return (
      <Carousel className='pt-5'>
        {
          this.state.datas.slice(0, 3)
            .map(item => {
              console.log(item, ">>>>>>>>>>")
              return (
                <div>
                  {/* <h1>{item.recipeId.title}</h1> */}
                  <div className=''>
                    <div class="card" >
                      <div class="row" style={{ borderRadius: "36px" }}>
                        {/* <div style={{display:"inline-flex"  }} > */}
                        <div class="banner" >
                          <div class="col-sm-3 col-md-6 bg-light  ">
                            <h1 class="pb-5">{item.recipeId.title}</h1>
                            <h6 class="text-muted ">{item.recipeId.description}<br /></h6>

                            <h6 class="text-muted font-weight-bold pb-5 pt-3 mx-auto ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill  text-dark mr-3" viewBox="0 0 16 16">
                                <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                              </svg>
                              {item.recipeId.cookTime}

                              <span class=" text-muted mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple text-dark ml-3 mr-3" viewBox="0 0 16 16">
                                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                </svg>
                                {item.recipeId.categoryId.categoryName}
                              </span>
                            </h6>

                            <div class="mx-auto">
                              <div class="row">
                                <div class="col-md">
                                  <h6 class="text-dark font-weight-bold ">
                                    <img src={`http://95.111.202.157:8001/${item.recipeId.userId.Image}`} clas="float-left" alt="fftgh" style={{ width: '50px', height: "50px" }} class="rounded-circle mr-3" />

                                    {item.recipeId.userId.firstName}
                                    <p class="text-muted pb-3 pt-2">12 November 2021</p>
                                  </h6>
                                </div>
                                <div class="col-md">
                                  <a href={`/recepi/${item._id}`} type="button" class="btn bg-dark text-white mx-auto pb-4 font-weight-bold" style={{ borderRadius: "16px" }}>View Recipe</a>
                                </div>
                              </div>


                            </div>
                          </div>
                          <div class="col-sm-9 col-md-6 ">

                            <div>
                              <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} alt="description" class="img-fluid"
                                style={{ width: "660px", height: "500px", borderRadius: "16px" }} />
                              <div class="carousel-caption d-none d-md-block">
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })
        }




      </Carousel>
    );
  }
};
export default Slider;

