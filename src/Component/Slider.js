// import React, { useState, useEffect,useRef } from 'react'
// import axios from 'axios'
// import '../Assest/Slider.css'
// import { AllCategory, Subscribe, GetAllRecipe, GetRecipe } from '../Config/Commonapi';


// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

// function Slideshow() {
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slideshow;

// // ReactDOM.render(<Slideshow />, document.getElementById("App"));






// slider code of home page 
   {/* top slider */}
   <div class="container">
   <br />
   <div id="myCarousel" class="carousel slide" data-ride="carousel">
     {/* <!-- Indicators --> */}
     <ol class="carousel-indicators">
       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
       <li data-target="#myCarousel" data-slide-to="1"></li>
       <li data-target="#myCarousel" data-slide-to="2"></li>
       <li data-target="#myCarousel" data-slide-to="3"></li>
     </ol>

     {/* <!-- Wrapper for slides --> */}
     <div class="carousel-inner" role="listbox">

       <div class="item active">
         <div class="row pt-5 float-left pb-5">
           {/* {
         list.slice(0, 4).map(item => {
           console.log("list data", list)
           return (
             <div style={{ display: "inline-flex" }} className='varru'>


               <div className='sa pb-5'>

                 <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} alt="fftgh" style={{ width: "300px", height: "250px", padding: "20px" }} />
                 <h6 class=" pt-2 pb-3">{item.recipeId.description}</h6>
                 <div className='float-left' >
                   <p class="text-muted">{item.recipeId.cookTime}
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left ml-3 text-dark" viewBox="0 0 16 16">
                       <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                     </svg>
                   </p>
                 </div>
                 <div className='float-right' >
                   <p class="text-muted">Healthy
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left ml-4 text-dark" viewBox="0 0 16 16">
                       <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                       <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                     </svg>
                   </p>

                 </div>
               </div>

             </div>
           )
         })
       } */}


           <div class="col-sm-6 bg-info pt-5 ">
             <h1 class="pt-5 pb-5">specicy delicious</h1>
             <p class="text-muted ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Maxime mollitia,
               molestiae quas vel sint  voluptatum laborum
             </p>

             <h6 class="text-muted font-weight-bold pb-5 pt-3 ml-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill ml-5 text-dark mr-3" viewBox="0 0 16 16">
                 <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
               </svg>
               30 minutes

               <span class=" text-muted ml-5">
                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple text-dark mr-3" viewBox="0 0 16 16">
                   <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                   <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                 </svg>
                 Healthy
               </span>
             </h6>

             <div class="float-left ml-5 pt-5">
               <div class="row">
                 <div class="col">
                   <h6 class="text-dark font-weight-bold ml-5 ">
                     <img src="data:image/jpeg;base64,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"
                       alt="des" style={{ width: '50px', height: "50px" }} class="rounded-circle mr-3" />
                     jhon smith
                     <p class="text-muted pb-5 pt-2">12 November 2021</p>
                   </h6>
                 </div>
                 <div class="col">
                   <a href="/recepi" type="button" class="btn btn-dark btn-lg rounded-lg float-right ml-5">VIEW RECIPE</a>
                 </div>
               </div>


             </div>
           </div>

           <div class="col-sm-6 pt-5 bg-info">

             <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
               class="rounded-lg" alt="description"
               style={{ width: "660px", height: "500px" }} />



           </div>


         </div>
         <div class="carousel-caption">
           <h3>Chania</h3>
           <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
         </div>
       </div>

       <div class="item">
         <img src="https://alkite.files.wordpress.com/2009/05/surfing-1.jpg" alt="Chania" width="460" height="345" />
         <div class="carousel-caption">
           <h3>Chania</h3>
           <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
         </div>
       </div>

       <div class="item">
         <img src="https://alkite.files.wordpress.com/2009/05/surfing-1.jpg" alt="Flower" width="460" height="345" />
         <div class="carousel-caption">
           <h3>Flowers</h3>
           <p>Beatiful flowers in Kolymbari, Crete.</p>
         </div>
       </div>

       <div class="item">
         <img src="https://alkite.files.wordpress.com/2009/05/surfing-1.jpg" alt="Flower" width="460" height="345" />
         <div class="carousel-caption">
           <h3>Flowers</h3>
           <p>Beatiful flowers in Kolymbari, Crete.</p>
         </div>
       </div>

     </div>

     {/* <!-- Left and right controls --> */}
     <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
       <span class="sr-only">Previous</span>
     </a>
     <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
       <span class="sr-only">Next</span>
     </a>
   </div>
 </div>