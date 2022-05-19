import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Carousel } from "react-bootstrap";
import { AllCategory, Subscribe, GetAllRecipe, GetRecipe } from '../Config/Commonapi';

function Newslider() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();

    }, []);
    async function fetchData() {

        await axios.get('/v1/getallrecipes')
            .then((response) => { setList(response.data) })
        //.then((response) => { console.log(response.data) });

    }

    return (
        <div>


            <h1 className="reviews-h1">Reviews</h1>
            <Carousel>
                {list.slice(0, 3).map(item => (
                    <Carousel.Item key={item._id}>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78nhMfwSqnKCdSSN7I6oyI2bAUsDC7SZFb5f7q0RWLsegKxDQAJU4XOHu9klAGd1za9E&usqp=CAU" 
                          class="d-block w-75 h-50" alt="hhhh" />
                        
                        <Carousel.Caption>
                            <h3>{item.recipeId.title}</h3>
                            <p>{item.recipeId.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    )
}
export default Newslider;
// 
          {/* <Carousel>
            {
              list.slice(0, 3).map((item)=>{

                console.log(">>>>>>>>>>>", list)
                return (
                  <div>
                    <Carousel.Item key={item._id}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78nhMfwSqnKCdSSN7I6oyI2bAUsDC7SZFb5f7q0RWLsegKxDQAJU4XOHu9klAGd1za9E&usqp=CAU"
                        class="d-block w-75 h-50" alt="hhhh" />

                      <Carousel.Caption>
                      <h1 class="">{item.recipeId.title}</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </div>
                )
              })
            
            }

            <Carousel.Item>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78nhMfwSqnKCdSSN7I6oyI2bAUsDC7SZFb5f7q0RWLsegKxDQAJU4XOHu9klAGd1za9E&usqp=CAU"
                class="d-block w-75 h-50" alt="hhhh" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78nhMfwSqnKCdSSN7I6oyI2bAUsDC7SZFb5f7q0RWLsegKxDQAJU4XOHu9klAGd1za9E&usqp=CAU"
                class="d-block w-75 h-50" alt="hhhh" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}

          {/* 1st method */}
          {/* <div id="carouselExampleCaptions pt-5" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner pt-5">

              {
                list.slice(0, 3).map(item => {
                  console.log(">>>>>>>>>", list)
                  return (
                    <div>
                                 <div class="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78nhMfwSqnKCdSSN7I6oyI2bAUsDC7SZFb5f7q0RWLsegKxDQAJU4XOHu9klAGd1za9E&usqp=CAU" class="d-block w-75 h-50" alt="hhhh" />
                        <div class="carousel-caption d-none d-md-block">
                        <h1 class="pt-5 pb-5">{item.recipeId.title}</h1>
                          <p>Some representative placeholder content for the first slide.</p>
                        </div>
                      </div>
                      </div>
                   
                  )
                })
              }
 
              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGqwMxEhlQq8WbONekYUOaXjey5bnEPGQqg&usqp=CAU" class="d-block w-75 h-50" alt="hhhh" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqiwa0S35Erm3_C_sNVKv9BstnqakzmdcbEQ&usqp=CAU" class="d-block w-75 h-50" alt="hhgg" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */}