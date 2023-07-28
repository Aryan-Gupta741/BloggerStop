import React from 'react'
import "../CSS/about.css"

const about = () => {
  return (
    <div>
        <section id="about">
      <div class="about-wrapper container">
        <div class="about-text">
          <p class="small"><h1>About Us</h1></p>
          <h2>We've been providing people with all kinds of intesresting blogs so that they can enjoy their daily lives</h2>
          <p className='color'>
          Unleash your voice, ignite your passions, and dive into a world of captivating blogs! 
          Our website is your gateway to a vibrant community of writers and readers. 
          Explore limitless topics, from tech marvels to travel tales, all under one virtual roof. 
          Immerse yourself in thought-provoking discussions, gain fresh insights, and connect with 
          like-minded individuals. Ready to share your own story? Become a writer, shape minds, and 
          leave your mark. Let your words soar and join our blogosphere revolution. Get ready to be 
          inspired, entertained, and captivated. Welcome to the realm of boundless blogging!
          </p>
        </div>
        <div class="about-img">
          <img src="https://images.unsplash.com/photo-1683967355134-de690b1d2bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzM3xibzhqUUtUYUUwWXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="food" />
        </div>
      </div>
    </section>

    <div>
        <div className="space">
        <section id="testimonials">
      <h2 class="testimonial-title">A Little About Some Of Our Writers</h2>
      <div class="testimonial-container container">
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="" />
              <p class="customer-name">Ross Lee</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img
                src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                alt=""
              />
              <p class="customer-name">Amelia Watson</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="" />
              <p class="customer-name">Ben Roy</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
      </div>
      </section>
      </div>
    </div>
    </div>
  

  )
}

export default about