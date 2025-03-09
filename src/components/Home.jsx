import NavBar from "./NavBar";
import About from "./About";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => window.scrollTo({ behavior: "smooth" }), []);

  return (
    <>
      <div className="home">
        <NavBar />
        <h1>Hali J. Rodriguez</h1>
        <h2></h2>
        <h2>Developer & 3Dd Artist</h2>

        {/* <body>"hor hor hor hor hor" -feddy</body> */}
      </div>

      <div className="about">
        <About />
        <h3 className="divider">✧･ﾟ: *✧･ﾟ:* ~·͙*̩̩͙˚̩̥̩̥*̩̩̥͙ ✩ *̩̩̥͙˚̩̥̩̥*̩̩͙‧͙~ *:･ﾟ✧*:･ﾟ✧</h3>
      </div>
    </>
  );
}
