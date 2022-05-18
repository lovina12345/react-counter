import React, { useState } from "react";
import {Link} from "react-router-dom";
import { UseState } from "react";




function Login () {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (email && password) {
            setEmail("");
            setPassword("");
          } else {
            alert("Fill forms to continue");
          }
        };
        return (
          
          // <div>
          //   <div className="bodybg">
          //     <div className="navedit">
          //       <nav className="navbar navbar-light bg-light">
          //         <Link className="navbar-brand" to="/">
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
                  <h1>MY GOODS</h1>
           <p>lovina goods are made from UK & US and these kinds of goods are ladies heels.my heels are from a company of zara,ego and simmi shoes , i got all the 
               best goods which is not common in ghana.you can see from your view how nice and quality my goods are thank you,
           </p>
                    <img
                      src="images/o.jpg"
                      width="30%"
                      height="20%"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                     <img
                      src="images/banner.png"
                      width="60%"
                      height="20%"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                     <img
                      src="images/running-shoes.png"
                      width="30%"
                      height="20%"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                 {/* </link>
      
                   <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/lovina">Lovina</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li className="active-link">
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </nav>
              </div>  */}
      
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <h3 className="text">
                      How to get my Goods? Login to add your Emails.
                    </h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="form-group">
                        <label for="exampleInputEmail1">
                          <b>Email address</b>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">
                          <b>Password</b>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
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
                    <h6>&copy; It all about Lovina Goods</h6>
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

export default Login;