import ContactPage from "./ContactPage";
import NavBar from "./NavBar";

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <div className="projects">
        <h1>Dev Projects</h1>
        <div className="Dev1">
          <h2>Studio Drink</h2>
          <img src="../src/assets/studioDrink.PNG" className="studiodrink" />
          <p>
            Studio Drink is a full stack web application that combines two
            powerful remote APIs (Spotify and The Cocktail DB) with our local
            database, creating a site that leverages hundreds of drink recipes
            and millions of Spotify artists and genres. The user inputs any
            artist or genre on Spotify and receives a curated beverage from the
            connected external cocktail database. Users can create new drinks,
            add drinks to favorites, browse all local and external drinks,
            toggle alcoholic/nonalcoholic, and search drinks. The app also
            features an embedded Spotify player and multiple types of lazy
            loading including a custom pagination algorithm. Additionally, we
            prioritized creating a seamless and beautiful user experience with
            maximized customization in pure CSS (including, but not limited to:
            day/night mode toggle, custom side navigation, custom snackbar
            alerts, flip cards, and transition animations).
          </p>
          <h3>Project tech stack:</h3>
          <p>
            JavaScript | React | HTML | CSS | Express | Node.js | SQL |
            PostgreSQL | Material UI | BCrypt | Cypress
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/bwXg36Vy9BI?si=1EmulJh0GCxD5ZX0"
            title="YouTube video player"
            border="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h3 className="divider">✧･ﾟ: *✧･ﾟ:* ~·͙*̩̩͙˚̩̥̩̥*̩̩̥͙ ✩ *̩̩̥͙˚̩̥̩̥*̩̩͙‧͙~ *:･ﾟ✧*:･ﾟ✧</h3>
        <h1>Art Projects</h1>
        <div className="art1">
          <h2>Hand Study</h2>
          <img src="../src/assets/hand.jpg" />
          <h2>art instagram</h2>
          <iframe>
            <video src=""></video>
          </iframe>
        </div>
        <h2>Room Study</h2>
      </div>
      <ContactPage />
    </>
  );
}
