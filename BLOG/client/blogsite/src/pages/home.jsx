import React from 'react'
import LogoAnimation from "../components/LogoAnimation"
import BlogTile from "../components/UIblogtiles"
import "../CSS/home.css"
import axios from 'axios'

const home = () => {
  const handlesubmit =  async (e) =>{
    e.preventDefault();
    try{
      const headers = {
        "Content-Type":"application/json"
      };
      await axios.post("http://localhost:5000/api/auth/add",{headers})
      
    }
    catch(err){
       console.log(err)
    }

  }
  return (
    <div>
    <section className="showcase-area" id="showcase">
      <div className="showcase-container">
        <div><LogoAnimation/></div>
        <p className='p1'>Read blogs on numerous topics, induldge in writing on you own as well and expand your sea of knowledge!</p>
      </div>
    </section>
    <div>
      <BlogTile/>
      </div>
      

    <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
    </ul>
    <p>&copy;2021 Protiviti Consulting | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default home