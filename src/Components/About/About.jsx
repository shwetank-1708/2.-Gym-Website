import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nurture Your Tomorrow</h2>
        <p>
          Going to the gym provides numerous physical benefits, such as improved
          cardiovascular health, increased muscle mass, and better flexibility.
          Regular exercise helps reduce the risk of chronic diseases like heart
          disease and diabetes, while aiding in weight management.
        </p>
        <p>
          Beyond physical health, gym workouts boost mental well-being by
          releasing endorphins, which alleviate stress and anxiety. The
          structured environment fosters motivation and a sense of
          accomplishment, enhancing self-esteem and confidence.
        </p>
        <p>
          Additionally, regular gym visits increase energy levels and improve
          sleep patterns. The routine helps regulate sleep cycles and boosts
          daily energy, making everyday tasks easier and promoting a balanced
          lifestyle.
        </p>
      </div>
    </div>
  );
};

export default About;
