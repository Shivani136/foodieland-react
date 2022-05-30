
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Assest/Recepimeta.css';
import { AddRecipesMeta } from '../Config/Commonapi';

const PopUp = () => {

    let modalBtns = [...document.querySelectorAll(".button")];
    modalBtns.forEach(function (btn) {
        btn.onclick = function () {
            let modal = btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";
        };
    });
    let closeBtns = [...document.querySelectorAll(".close")];
    closeBtns.forEach(function (btn) {
        btn.onclick = function () {
            let modal = btn.closest(".modal");
            modal.style.display = "none";
        };
    });
    window.onclick = function (event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };
    return (
        <div>

            {/* <button class="open-button" onClick="openForm()">Open Form</button>

            <div class="form-popup" id="myForm">
                <form class="form-container">
                    <h1>Login</h1>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onClick="closeForm()">Close</button>
                </form>
            </div> */}


<h2>Multiple Popup Forms</h2>
    <p>
      <button class="button" data-modal="modalOne">Contact Us</button>
    </p>
    <p>
      <button class="button" data-modal="modalTwo">Send a Compliant Form</button>
    </p>
    <div id="modalOne" class="modal">
      <div class="modal-content">
        <div class="contact-form">
          <a class="close">&times;</a>
          <form action="/">
            <h2>Contact Us</h2>
            <div>
              <input class="fname" type="text" name="name" placeholder="Full name" />
              <input type="text" name="name" placeholder="Email" />
              <input type="text" name="name" placeholder="Phone number" />
              <input type="text" name="name" placeholder="Website" />
            </div>
            <span>Message</span>
            <div>
              <textarea rows="4"></textarea>
            </div>
            <button type="submit" href="/">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div id="modalTwo" class="modal">
      <div class="modal-content">
        <div class="contact-form">
          <span class="close">&times;</span>
          <form action="/">
            <h2>Complaint form</h2>
            <div>
              <input class="fname" type="text" name="name" placeholder="Full name" />

              <input type="text" name="name" placeholder="Website" />
            </div>
        
          
            <button type="submit" href="/fgfgh">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default PopUp;
