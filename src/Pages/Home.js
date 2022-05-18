import React from "react"
import { Link } from "react-router-dom";
import '../App.css';


function Home() {
    return(
      <div>
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
        <div className="row">
       <div className="col-sm-6 col-lg-2"> 
         
            <h1>LOVINA SHOES</h1>
           <p>lovina goods are made from UK & US and these kinds of goods are ladies heels.my heels are from a company of zara,ego and simmi shoes , i got all the 
               best goods which is not common in ghana.you can see from your view how nice and quality my goods are thank you.lovina goods are made from UK & US and these kinds of goods are ladies heels.my heels are from a company of zara,ego and simmi shoes , i got all the 
               
           </p> 
        {/* <div className="background.jpg">
          <nav className="navbar navbar-light  navedit">
            <Link className="navbar-brand" to="/"> */}
            <div className="pic1">
              <img 
                src="images/a.jpg"
                width="200px"
                height="300px"
                className="d-inline-block align-top"
                alt="logo"
              />
                 <div className="col-md-8 line">
                    <h3>
                      <a href="">block slippers heel</a>
                    </h3>
                    <p className="one">
                     $20
                    </p>
                    </div>
              </div>
        

              <div className="pic2">
              <img
                src="images/2.jpg"
                width="35%"
                className="d-inline-block align-top"
                alt="logo"
              />
               <div className="col-md-8 line">
                    <h3>
                      <a href="">Buy more for Discount</a>
                    </h3>
                    <p className="one">
                     20%
                    </p>
                    </div>
              </div>
              </div>
       {/* <div className="col-sm-6 col-lg-2"> 
       <img
                src="images/l.jpg"
                width="200px"
                height="300px"
                className="d-inline-block align-top"
                alt="logo"
              />
              </div>

              <div className="col-sm-6 col-lg-2"> 
       <img
                src="images/l.jpg"
                width="200px"
                height="300px"
                className="d-inline-block align-top"
                alt="logo"
              />
              </div> */}

        
  
            {/* <ul>
              <li className="active-link">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/lovina">LOVINA</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav> */}

        
           <div className="row">
          <div className="content">
            <h1 className="text-center">LOVINA HEELS</h1>
            <p className="text-center par">
              It all about my  goods <br />
              we have sandarls heel, block heel,slippers heel,etc.
            </p>
                    
            <div className="buttonsetup">
              <Link to="./register">
                <button className="ordernow">ORDER Now!</button>
                <button class="subscribr_bt">Subscribe</button>
              </Link>
            </div>
        </div>
        </div>
        </div>
        
  
        <footer className= "homefooter">
           <div className="container2"> 
            <div className="row">
              <div className="col-md-4">
                <h6>&copy; It all about Lovina</h6>
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
      </div>
    );  
    

}

export default Home;