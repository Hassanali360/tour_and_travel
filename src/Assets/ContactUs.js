import React from "react";
import Footer from "./Footer";

export default function ContactUs() {
  const Input = document.getElementsByClassName('Input');
  const RegexName = /^[A-Za-z]+$/;
  const RegexNumber = /^\d{11}$/;
  const RegexEmail = /^\S+@\S+.\S+$/;
  const RegexText = /^\S+$/;
 const handleonclick = ()=>{
    if(Input[0].value === '' || Input[1].value === '' || Input[2].value === '' || Input[3].value === '')
    {
      alert("Fill all form");
    }
    else if(Input[0].value === RegexName || Input[1].value === RegexNumber || Input[2].value === RegexEmail || Input[3].value === RegexText)
    {
    alert("Sucessfully Form fill");
    }
    else{
  alert("format issues correct fill form");
    }
  }
  return (<>
    <div className="contact--page">
      <h1 className="contact--heading">Contact Us</h1>
      <div className="contact--cont">
        <div>
        <form className="contact--cont1">
            <input type="text" className="Input" placeholder="Your Name" onClick={handleonclick} />
            <input type="text" className="Input" placeholder="Email" />
            <input type="text" className="Input" placeholder="Phone Number" />
            <input type="text" className="Input" placeholder="City" />
            <textarea className="Input text-area" placeholder="Message"/>
            <button className="btn--submit" onClick={handleonclick}>Submit</button>
        </form>
        </div>
        <div className="contact--cont2">
        <h3>EMAIL</h3>
        <p>umairimtiaz664@gmail.com</p>
        <h3>Phone No</h3>
        <p>+923-478161133</p>

        <h3>Address</h3>
        <p>Chathian, Hattian Bala, AJK.</p>

        </div>
      </div>
    </div>
    <Footer/>
  </>
    
  );
}
