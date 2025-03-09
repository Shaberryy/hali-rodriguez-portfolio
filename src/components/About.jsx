/** @format */

// import NavBar from "./NavBar";
// import { Link } from "react-router-dom";
import ContactPage from "./ContactPage";
export default function About() {
  return (
    <>
      <div>
        {/* <NavBar /> */}
        <body>
          <br />
          <h1>ABOUT ME</h1>
          <div className="nameAndPhoto">
            <img
              className="halisquare"
              src="hali-rodriguez-portfolio/src/assets/hali3.jpg"
            />
            <p className="bio">
              <h1>Hali Jaden Rodriguez</h1>
              Hi, I`m Hali Rodriguez, a California-based Full Stack Developer
              with a passion for digital art and 3D animation. My expertise in a
              range of design software applications, including Maya, Blender,
              Clip Studio and Zbrush, allows me to bring a creative edge to my
              development projects.
              <br />
              <br /> When Im not coding, you can find me immersed in my own art
              projects, where I love to explore the realms of 3D animation and
              sculpting. I find inspiration in the intricacies of digital art
              and the captivating world of video games, which fuels my
              creativity and problem-solving skills. With a keen eye for detail
              and a knack for working efficiently both individually and within a
              team, I can thrive in fast-paced environments.
              <br />
              <br /> I`m always open to new ideas and approaches, believing that
              the best solutions often emerge from collaborative and diverse
              perspectives. Based in the heart of California, I embrace the
              vibrant tech community and constantly seek opportunities to expand
              my skill set and contribute to innovative projects that push the
              boundaries of digital creativity
            </p>
          </div>
          {/* <h3 className="divider">✧･ﾟ: *✧･ﾟ:* ~·͙*̩̩͙˚̩̥̩̥*̩̩̥͙ ✩ *̩̩̥͙˚̩̥̩̥*̩̩͙‧͙~ *:･ﾟ✧*:･ﾟ✧</h3> */}
          <p className="hobbies">
            <h2>Hobbies</h2>
            <h3>
              In my free time I love to play music, I am a self taught musician
              and can play; guitar, ukulele, bass and pian. I also love learning
              languages and raising my plant children. :3
            </h3>
          </p>
        </body>
        <footer>
          <h2 className="return">
            {/* <Link to="/Contact">[contact me]</Link> */}
            <h3>[contact me]</h3>
            <ContactPage />
          </h2>
        </footer>
      </div>
    </>
  );
}
