import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Transform Your Body, Transform Your Life – Join Our Gym Today!</h1>
        <p>
          Join our gym today and experience expert training, state-of-the-art
          facilities, and a supportive community to help you achieve your
          fitness goals and transform your life.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
