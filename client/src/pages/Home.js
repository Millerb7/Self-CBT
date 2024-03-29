import React, { useState } from "react";
import SimpleEntry from "../components/Entry/SimpleEntry";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import Articles from "../components/Home/Articles";
import IntroModal from "../components/Home/IntroModal";
import AdvancedEntry from "../components/Entry/AdvancedEntry";
import inputType from "./Settings";

import "bulma/css/bulma.css";
import "../index.css";

const styles = {
  body: {
    background: "var(--dark)",
  },
};

const Home = () => {
  const [openModal, setModal] = useState(false);

  console.log(inputType);

  return (
    <div style={styles.body}>
      <HomeNavbar />
      <div className="tile is-ancestor">
        <div className="tile is-parent box is-flex is-flex-direction-column is-align-items-center m-5">
          <h1 className="title is-size-1">Self CBT</h1>
          <h1 className="title is-size-3">Welcome to self help!</h1>
          <h3 className="title is-size-6">
            Web app is a work in progress still. Taking a hiatus for a funeral and life events.
          </h3>
          <button
            id="introBtn"
            className="button is-light is-default p-2"
            onClick={() => setModal(true)}
          >
            Introduction to CBT
          </button>
          {openModal && <IntroModal closeModal={setModal} />}
          <div>
            <Articles />
          </div>
        </div>
      </div>
      {inputType==="simple" ? <SimpleEntry /> : <AdvancedEntry />}
    </div>
  );
};

export default Home;
