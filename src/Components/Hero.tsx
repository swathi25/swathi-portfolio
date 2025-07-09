import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <img src="/profile.jpg" alt="Swathi" className="profile-img" />
      </div>
      <div className="right">
        <h1>Hello, I'm Swathi K</h1>
        <h2>Frontend Developer in React</h2>
        <p>Passionate about building responsive and user-friendly web apps.</p>
        <div className="buttons">
          <Link to="/hire">
            <button>Hire Me</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
