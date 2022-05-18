import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";




function Register() {
    
        
        const [name, setName] = useState("")
        const [email, setEmail] = useState("");
        const [location, setLocation] = useState("");
        const [confirmLocation, setConfirmLocation] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (name && email && location && confirmLocation) {
            if (location == confirmLocation) {
              setName("");
              setEmail("");
              setLocation("");
              setConfirmLocation("");
            } else {
              alert("Location does not match");
              setLocation("");
              setConfirmLocation("");
            }
          } else {
            alert("Fill forms to continue");
          }
        };


        return (
           <div>
            {/* <div className="bodybg">
              <div className="navedit">
                <nav className="navbar navbar-light bg-light">
                  <Link className="navbar-brand" to="/"> */}
                  <div class="container">
        					<div class="col-sm-9">
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                           <a class="nav-item nav-link" href="home">Home</a>
                           <a class="nav-item nav-link" href="lovina">LOVINA</a>
                           <a class="nav-item nav-link" href="register">Register</a>
                           <a class="nav-item nav-link" href="login">Login</a>
                           <a class="nav-item nav-link" href="contact.0271601775/0200379176">Contact;0271601775/0200379176</a>
                           <a class="nav-item nav-link last" href="register"><img src="images/search_icon.png"/></a>
                           <a class="nav-item nav-link last" href="lovina"><img src="images/shop_icon.png"/></a> 
                        </div>
                    </div>
                    </nav>
                    </div>
       <div>
                  <h1>LOVINA GOODS FOR MEN</h1>
           <p>lovina goods are made from UK & US and these kinds of goods are ladies heels.my heels are from a company of zara,ego and simmi shoes , i got all the 
               best goods which is not common in ghana.you can see from your view how nice and quality my goods are thank you,
           </p>
                    <img
                      src="images/shop-banner.png"
                      width="100%"
                      height="10%"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                   {/* </Link>
      
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/lovina">LOVINA</Link>
                    </li>
                    <li className="active-link">
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </nav> */}
              
                </div>
      
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <h3 className="text">
                     Quality Men Shoes. Sign up to get your order now!
                    </h3>
      
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="form-group">
                        <label htmlFor="exampleInputfullname1">
                          <b>Full Name</b>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="exampleInputfullname1"
                          aria-describedby="nameHelp"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          <b>Email address</b>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputLocation1">
                          <b>Location</b>
                        </label>
                        <input
                          name="location"
                          type="location"
                          className="form-control"
                          id="exampleInputLocation1"
                          placeholder="Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputconfirmLocation1">
                          <b>Confirm Location</b>
                        </label>
                        <input
                          name="confirmLocation"
                          type="location"
                          className="form-control"
                          id="exampleInputconfirmLocation1"
                          placeholder="Confirm location"
                          value={confirmLocation}
                          onChange={(e) => setConfirmLocation(e.target.value)}
                        />
                      </div>
                      <button type="signup"  className="btn btn-primary">
                        Sign up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      
            <footer className="homefooter">
              <div className="container2">
                <div className="row">
                  <div className="col-md-4">
                    <h6>&copy; It all about lovina</h6>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <div className="logo">
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-linkedin"></a>
                      <a href="#" className="fa fa-instagram"></a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>    
        
    )
}

export default Register;