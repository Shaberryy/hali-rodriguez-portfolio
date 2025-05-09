/** @format */

import ContactPage from "./ContactPage";
import NavBar from "./NavBar";

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <div className="projects">
        <h1>Dev Projects</h1>
        <div className="Dev1">
          <h1>Studio Drink</h1>
          <img
            // src="https://media.discordapp.net/attachments/1150879184273543188/1348235646237540362/studioDrink.PNG?ex=67ceb9cb&is=67cd684b&hm=55c4a61c506610386e8a21447373c1621587388117180eb5c406f0dd9ffdb30b&=&format=webp&quality=lossless&width=855&height=480"
            src="/hali-rodriguez-portfolio/src/assets/studioDrink.png"
            className="studiodrink"
          />
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
          <h2>Project tech stack:</h2>
          <p>
            JavaScript | React | HTML | CSS | Express | Node.js | SQL |
            PostgreSQL | Material UI | BCrypt | Cypress
          </p>
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/bwXg36Vy9BI?si=1EmulJh0GCxD5ZX0"
            title="YouTube video player"
            border="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <br />
          <div>
            {/* <h3 className="divider">✧･ﾟ: *✧･ﾟ:* ~·͙*̩̩͙˚̩̥̩̥*̩̩̥͙ ✩ *̩̩̥͙˚̩̥̩̥*̩̩͙‧͙~ *:･ﾟ✧*:･ﾟ✧</h3> */}
            <h1>Art Projects</h1>
            <div className="art1">
              <h2>Hand Study</h2>
              <img
                className="hand"
                // src="https://cdn.discordapp.com/attachments/1150879184273543188/1348234678141845534/hand.jpg?ex=67ceb8e4&is=67cd6764&hm=0da1cb2a4c5f806ca63d33e61e179a03b9c503641886edd8ea65c4152504c7a0&"
                src="/hali-rodriguez-portfolio/src/assets/hand.jpg"
              />
              <h2>Room Study</h2>

              <img
                className="room"
                // src="https://media.discordapp.net/attachments/1150879184273543188/1348234964398772334/room.jpg?ex=67ceb928&is=67cd67a8&hm=620da98ba897a8129e3b3635e08700b062e9944dee97d9a3376dcc257647ca3e&=&format=webp&width=855&height=481"
                src="/hali-rodriguez-portfolio/src/assets/room.jpg"
              />
            </div>

            {/* <h2>art instagram</h2>
          <iframe>
            <video src=""></video>
          </iframe> */}
          </div>
        </div>
      </div>
      <ContactPage />
    </>
  );
}
