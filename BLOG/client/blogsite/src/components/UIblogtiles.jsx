import React from 'react'
import "../CSS/blogtiles.css"

const UIblogtiles = () => {
  return (
    <div>
      <div className='topic'><h1>Some Suggested Artciles</h1></div>
      <div className="wrap">
<div className="tile"> 
  <img src='https://images.unsplash.com/photo-1687011909393-195e148d9428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80'/>
  <div class="text">
  <h1>Luminacent Jellyfish</h1>
  <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
  <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div className="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>


<div className="tile"> 
    <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80'/>
       <div className="text">
          <h1>Lorem ipsum.</h1>
          <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
 </div>
  
  <div className="tile"> 
    <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80'/>
      <div className="text">
        <h1>Lorem ipsum.</h1>
        <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
        <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
 </div>
</div>
  
  
</div>

  )
};

export default UIblogtiles