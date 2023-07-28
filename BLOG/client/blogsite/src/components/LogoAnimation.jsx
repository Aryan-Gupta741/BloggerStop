
import "../CSS/logo_animation.css"

const LogoAnimation = () => {
  return (
    <h1 className="block-effect" style={{ "--td": "1.2s" }}>
    <div className="block-reveal" style={{ "--bc": "#4040bf", "--d": ".1s" }}>Bloggers</div>
    <div className="block-reveal" style={{ "--bc": "#bf4060", "--d": ".5s" }}>Stop</div>
  </h1>
  
  )
};

export default LogoAnimation