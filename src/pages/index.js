/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { GlitchText } from "glitch-text";

import Button from "@mui/material/Button";

import { RiDiscordFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";

import Layout from "../components/layout/Layout";
import classes from "../styles/Home.module.css";
import logo from "../public/Images/logo.png";
import { RadarChart } from "../components/RadarChart/RadarChart";
import { Divider } from "@mui/material";

const data = {
  labels: ["Aim", "IQ", "Clutch", "Strategy", "Headshot", "KDA"],
  datasets: [
    {
      label: "Player Stat",
      data: [85, 50, 90, 80, 80, 85],
      borderColor: "#d5a023",
      pointBackgroundColor: "#d5a023",
      borderWidth: 3,
      pointHoverBorderColor: "#d5a023",
      fill: true,
      backgroundColor: "rgb(213, 160, 35, 0.5)",
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <div className={classes.content}>
        <section className={classes.header} style={{ fontSize: "70px" }}>
          <Image src={logo} height={180} width={180} alt="Night Soldier" />
          <div className={classes.title} data-glitch="Night Soldier">
            Night Soldier
          </div>
        </section>
        <section className={classes["button-wrapper"]}>
          <Button variant="contained">
            <RiDiscordFill fontSize={20} className="me-1" /> Discord
          </Button>
          <Button variant="contained">
            <RiYoutubeFill fontSize={20} className="me-1" /> Youtube
          </Button>
          <Button variant="contained">
            <RiInstagramFill fontSize={20} className="me-1" /> Instagram
          </Button>
        </section>

        <section className={classes["introduction-wrapper"]}>
          <p className={classes.introduction}>
            Night Soldier is a gaming group that is known for its exceptional
            skills and teamwork. With a passion for online gaming, the members
            of Night Soldier come together to dominate the virtual battlefield.
            Their dedication to the game and each other has earned them a
            reputation as one of the most formidable groups in the gaming
            community. Whether they are playing first-person shooters or massive
            multiplayer games, Night Soldier always brings their A-game. With
            their tactical approach and effective communication, they are a
            force to be reckoned with. If you ever find yourself playing against
            Night Soldier, be prepared for a challenging and intense experience.
          </p>
        </section>

        <Divider
          flexItem
          className={classes.ourteam}
          component="h2"
          sx={{
            "&::before, &::after": {
              borderColor: "#fff",
            },
            p: "0 5rem",
          }}
        >
          Our Team
        </Divider>

        <section className={classes["personil-wrapper"]}>
          <ul className={classes["personil-list"]}>
            <li className={classes["personil-item"]}>
              <img
                src="https://prosettings.net/wp-content/uploads/tenz.png"
                className={classes.image}
              />

              <div className={classes.stats}>
                <div className={classes["player-name"]} data-glitch="Supervto">
                  Supervto
                </div>
                <p className={classes["player-intro"]}>
                  Supervto is a pro gamer who has made a name for himself in the
                  world of first-person shooter (FPS) gaming. His incredible
                  skill and precision with a mouse and keyboard are legendary
                  among his fans and competitors alike. Supervto has won
                  numerous tournaments and accolades for his FPS gameplay, and
                  his ability to read the game and outmaneuver his opponents is
                  unparalleled. He is known for his quick reflexes and
                  lightning-fast decision-making skills, which allow him to
                  dominate in fast-paced, high-pressure situations. When it
                  comes to FPS gaming, Supervto is truly in a league of his own.
                </p>
                <div className={classes["radar-chart"]}>
                  <RadarChart data={data} />
                </div>
              </div>

              <video autoPlay muted loop className={classes.video}>
                <source
                  src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4"
                  type="video/mp4"
                />
              </video>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
