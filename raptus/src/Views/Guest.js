import React, { useContext } from "react";
import "./Guest.scss";
import FirebaseContext from "../FirebaseContext";
import { useParams } from "react-router-dom";
import { usePromise } from "../Utils/usePromise";
import Button from "react-bootstrap/Button";

export const Guest = () => {
  const firebase = useContext(FirebaseContext);
  const { name } = useParams();

  const guest = usePromise(firebase.guestByName(name));

  if (guest) {
    return (
      <main className="Guest">
        <div className="portrait-and-link-wrapper">
          <img className="guest-portrait" src={guest.image} alt={guest.name+`-portrait`}></img>
          <Button
            className="view-website-button"
            href={guest.website}
            target="_blank"
            variant="outline-light"
          >
            Se nettside
          </Button>
        </div>
        <div>
          <h3 className="guest-name">{guest.name}</h3>
          <p className="guest-bio">{guest.bio.replace(/\\n/g, "\n\n")}</p>
        </div>
      </main>
    );
  } else {
    return <p style={{ textAlign: "center" }}>Laster...</p>;
  }
};
